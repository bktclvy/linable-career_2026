<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');

// ── 設定（要変更）──────────────────────────────────────
const TO_EMAIL   = 'info@linable-career.co.jp';      // 受信先メールアドレス
const FROM_EMAIL = 'noreply@linable-career.co.jp';   // 送信元（サイトのドメインと一致させること）
// ────────────────────────────────────────────────────

$category_labels = [
    'kit'    => '製造業DX：LINABLE Kit I',
    'jig'    => '製造業DX：3Dプリンタ治具DX',
    'csd'    => 'CSD伴走型コンサル',
    'chiiki' => '地域環境整備',
    'cases'  => '導入事例について',
    'other'  => 'その他・全般',
];
$stage_labels = [
    'research'    => 'まずは情報収集',
    'considering' => '具体的に検討中',
    'quote'       => '見積もりが欲しい',
    'urgent'      => 'すぐに相談したい',
];
$source_labels = [
    'search'   => '検索エンジン',
    'referral' => '知人の紹介',
    'event'    => 'イベント・展示会',
    'sns'      => 'SNS・記事',
    'other'    => 'その他',
];

function s(string $v): string {
    return trim($v);
}

function fail(string $msg): never {
    echo json_encode(['success' => false, 'message' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail('不正なリクエストです。');

// ハニーポット（ボット対策：人間には見えない隠しフィールド）
if (!empty($_POST['website'])) fail('送信できませんでした。');

// 必須フィールドの検証
$category  = s($_POST['category'] ?? '');
$name      = s($_POST['name'] ?? '');
$email_raw = s($_POST['email'] ?? '');
$message   = s($_POST['message'] ?? '');
$consent   = !empty($_POST['consent']);

if (!array_key_exists($category, $category_labels)) fail('お問い合わせの種類を選択してください。');
if ($name === '')                                    fail('お名前を入力してください。');
if (!filter_var($email_raw, FILTER_VALIDATE_EMAIL)) fail('正しいメールアドレスを入力してください。');
if ($message === '')                                 fail('お問い合わせ内容を入力してください。');
if (!$consent)                                      fail('プライバシーポリシーへの同意が必要です。');

// 任意フィールド
$company = s($_POST['company'] ?? '');
$tel     = s($_POST['tel'] ?? '');
$stage   = s($_POST['stage'] ?? '');
$source  = s($_POST['source'] ?? '');

$body = implode("\n", [
    'LINABLEキャリア ウェブサイトよりお問い合わせがありました。',
    '',
    '■ お問い合わせの種類',
    $category_labels[$category],
    '',
    '■ ご相談の段階',
    $stage_labels[$stage] ?? '未回答',
    '',
    '■ お名前',
    $name,
    '',
    '■ 会社名・団体名',
    $company ?: '未入力',
    '',
    '■ メールアドレス',
    $email_raw,
    '',
    '■ 電話番号',
    $tel ?: '未入力',
    '',
    '■ お問い合わせ内容',
    $message,
    '',
    '■ 当社をどこでお知りになりましたか',
    $source_labels[$source] ?? '未回答',
    '',
    '----------------------------------------',
    '送信日時：' . date('Y-m-d H:i:s'),
]);

mb_language('uni');
mb_internal_encoding('UTF-8');

$subject = mb_encode_mimeheader('【LINABLEキャリア】お問い合わせ：' . $category_labels[$category], 'UTF-8', 'B');
$from_name = mb_encode_mimeheader('LINABLEキャリア WEB', 'UTF-8', 'B');
$headers = implode("\r\n", [
    'From: ' . $from_name . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . $email_raw,
    'Content-Type: text/plain; charset=UTF-8',
]);

$result = mb_send_mail(TO_EMAIL, $subject, $body, $headers);

if ($result) {
    echo json_encode(['success' => true], JSON_UNESCAPED_UNICODE);
} else {
    fail('送信に失敗しました。時間をおいて再度お試しください。');
}
