# aws-sdk-v3-ex1

(created at 2023-08)

[AWS SDK for JavaScript v3 の ListBucketsCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketsCommand/)
を使って us-east-1 にある S3 バケットのリストを得るサンプル。

v3 チュートリアルがなくて、いきなりこんなノリなので辛い。
[用の SDK を使用する Amazon S3 の例 JavaScript(v3) - AWS SDK for JavaScript](https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html)

proxy 対応 (環境変数 https_proxy があると proxy 経由)。

## 実行

```bash
pnpm i
pnpm start
```

## TODO

- TypeScript にする。
  - tsc watch つける
- Rollup で bundle する。
