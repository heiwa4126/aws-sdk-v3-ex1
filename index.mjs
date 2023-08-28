import { s3Client } from "./libs/s3Client.mjs";
import { ListBucketsCommand } from "@aws-sdk/client-s3";

async function run() {
  // List Amazon S3 buckets.
  // See https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketsCommand/
  const command = new ListBucketsCommand({});
  const response = await s3Client.send(command);

  console.log(response);
}

run();
