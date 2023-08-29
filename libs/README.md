# aws-sdk-v3-ex1

(created in 2023-08)

[AWS SDK for JavaScript v3 の ListBucketsCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketsCommand/)
を使って us-east-1 にある S3 バケットのリストを得るサンプル。バンドルのテストでもある。

v3 チュートリアルがなくて、いきなりこんなノリなので辛い。

- [用の SDK を使用する Amazon S3 の例 JavaScript(v3) - AWS SDK for JavaScript](https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html)
- [aws-doc-sdk-examples/javascriptv3/example_code at main · awsdocs/aws-doc-sdk-examples](https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code)

proxy 対応 (環境変数 https_proxy があると proxy 経由)。

## 実行

```bash
pnpm i
pnpm start
```

(npm でも同様にできます)

## バンドル

```bash
pnpm build
# 実行
node dist/bundle.js
# or
NODE_PATH=/dev/null node dist/bundle.js
```

`dist/bundle.js` を 適当な名前でコピーして `node hoge.js` で実行

## TODO

- TypeScript にする。
  - tsc watch つける。
- esbuild で bundle する。→ done. `pnpm build`
- バンドルした奴に shebang 自動でつける。
