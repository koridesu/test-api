import {BindingScope, injectable} from '@loopback/core';
import {Client, ClientOptions} from 'minio';

@injectable({scope: BindingScope.TRANSIENT})
export class MinioService {
  protected minioClient: Client; //declaration

  constructor() {
    const config: ClientOptions = {
      endPoint: process.env.MINIO_HOST as string,
      port: parseInt(process.env.MINIO_PORT as string),
      accessKey: process.env.MINIO_ACCESS_KEY as string,
      secretKey: process.env.MINIO_SECRET_KEY as string,
      region: process.env.REGION,
      useSSL: process.env.USESSL === 'true',
    };
    this.minioClient = new Client(config);
  }

  public async deleteBucketByName(bucketName: string) {
    const isBucketexist = await this.minioClient.bucketExists(bucketName);

    if (isBucketexist) {
      await this.minioClient.removeBucket(bucketName);
      return 'bucket deleted';
    } else {
      return 'bucket is not found';
    }
  }

  public async createBucket(bucketName: string) {
    await this.minioClient.makeBucket(
      bucketName,
      process.env.MINIO_REGION as string,
    );
  }

  public async getObject(objectName: string) {
    // let size = 0;
    // this.minioClient.getObject(
    //   'test-bucket',
    //   objectName,
    //   function (err, dataStream) {
    //     if (err) {
    //       throw new Error(err.message);
    //     }
    //     dataStream.on('data', function (chunk) {
    //       size += chunk.toString().length;
    //       console.log(size);
    //     });
    //   },
    // );

    const readable = await this.minioClient.getObject(
      'test-bucket',
      objectName,
    );

    readable.on('data', chunk => {
      console.log(chunk.toString());
    });
  }
}
