#!/bin/bash
# Next.js ビルド → Xserver デプロイスクリプト

set -e

echo "=========================================="
echo "  Building Next.js..."
echo "=========================================="

cd "$(git rev-parse --show-toplevel)" || exit 1

npm run build

echo "=========================================="
echo "  Deploying out/ to Xserver..."
echo "=========================================="

SSH_KEY="$HOME/.ssh/devlinable.key"
REMOTE_USER="devlinable"
REMOTE_HOST="sv13109.xserver.jp"
REMOTE_PORT="10022"
REMOTE_PATH="/home/devlinable/linable-career.co.jp/public_html/"

if [ ! -f "$SSH_KEY" ]; then
    echo "Error: SSH key not found at $SSH_KEY"
    exit 1
fi

rsync -auzrv \
    -e "ssh -i \"$SSH_KEY\" -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p $REMOTE_PORT" \
    --delete \
    --exclude='.git' \
    --exclude='.github' \
    out/ \
    "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"

RESULT=$?

if [ $RESULT -eq 0 ]; then
    echo "=========================================="
    echo "  Deploy completed successfully!"
    echo "=========================================="
    exit 0
else
    echo "=========================================="
    echo "  Deploy failed! (exit code: $RESULT)"
    echo "=========================================="
    exit 1
fi
