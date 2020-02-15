import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { uuid } from 'uuidv4';
import aws from 'aws-sdk';

export const hello = async (event: APIGatewayEvent, context: unknown): Promise<APIGatewayProxyResult> => {
  const s3 = new aws.S3();
  const bucketName = 'try-lambda-upload-my-new-bucket';

  const objKey = uuid();

  const uploadUrl = await s3.getSignedUrlPromise('putObject', {
    Bucket: bucketName,
    Key: objKey,
    Expires: 3600,
    ContentType: 'application/json',
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ uploadUrl }),
  };
};
