import { HttpsProxyAgent } from "hpagent";
import { NodeHttpHandler } from "@smithy/node-http-handler";
// see https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v3/developer-guide/node-configuring-proxies.html

export const proxyHandler = process.env.https_proxy
  ? new NodeHttpHandler({
      httpsAgent: new HttpsProxyAgent({ proxy: process.env.https_proxy }),
    })
  : undefined;
