import { S3Client } from "@aws-sdk/client-s3";
import { proxyHandler } from "./proxy.mjs";

// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"

// Create an Amazon S3 service client object.
export const s3Client = new S3Client({ region: REGION, requestHandler: proxyHandler });
