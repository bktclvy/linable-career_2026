import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 有限会社LINABLEキャリア",
  description: "有限会社LINABLEキャリアの個人情報保護方針（プライバシーポリシー）です。",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Privacy Policy"
        title="プライバシーポリシー"
        sub="個人情報保護方針"
        theme="default"
      />

      <section>
        <div className="container-narrow reveal">
          <div className="legal-block">
            <div className="legal-intro">
              <h3>宣　言</h3>
              <p>有限会社LINABLEキャリアは、弊社がお預かりする様々な個人情報に対し、個人情報保護の社会的重要性を鑑み、以下の方針に基づき個人情報の保護に努めます。</p>
              <p>支援の質を高めるため、お伺いする個人情報を、必要に応じ双方のスタッフおよび提携相談員と共有します。</p>
            </div>

            <div className="legal-section">
              <h4>1. 個人情報の管理</h4>
              <p>個人情報を正確に保ち、不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、安全対策を実施し厳重な管理を行ないます。</p>
            </div>

            <div className="legal-section">
              <h4>2. 個人情報の利用目的</h4>
              <p>お伺いした個人情報は、カウンセリングおよび職場内の環境調整が適正に行われるよう利用致します。</p>
            </div>

            <div className="legal-section">
              <h4>3. 個人情報の第三者への開示・提供の禁止・守秘義務について</h4>
              <p>個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
              <ol className="legal-list">
                <li>本人の同意が得られた場合、本人が希望するサービスを行なうために連携し業務を行う関係者に対して開示する場合、法令に基づき開示することが必要である場合</li>
                <li>法令に基づき裁判所や警察等の公的機関から要請があった場合</li>
                <li>法令に特別の規定がある場合</li>
                <li>本人および第三者の生命・身体・財産・名誉を損なうおそれがあり、本人の同意を得る事ができない場合</li>
                <li>法令やご利用規約・注意事項に反する行動から、当社の権利、財産またはサービスを保護または防御する必要があり、本人の同意を得ることができない場合</li>
              </ol>
            </div>

            <div className="legal-section">
              <h4>4. 個人情報の安全対策</h4>
              <p>個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じるよう努力します。</p>
            </div>

            <div className="legal-section">
              <h4>5. 法令、規範の遵守と見直し</h4>
              <p>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
            </div>

            <div className="legal-section">
              <h4>6. 公開と改正について</h4>
              <p>公開開始日の日付を西暦で表示し、公示日を記載し、改正した日付を分かるよう致します。</p>
            </div>

            <div className="legal-footer">
              <p>制定日　2020年4月1日</p>
              <p style={{ marginTop: 8 }}><strong>有限会社LINABLEキャリア</strong></p>
              <p>代表取締役　荒川 陽子</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
