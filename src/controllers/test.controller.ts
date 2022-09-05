import {inject} from '@loopback/core';
import {get, param, post} from '@loopback/rest';
import {MinioService} from '../services/minio.service';

export class TestController {
  constructor(
    @inject('services.MinioService')
    public minioService: MinioService,
  ) {}

  @get('/deleteBucketByName')
  public async deleteBucketByName(
    @param.query.string('bucketName') bucketName: string,
  ) {
    return this.minioService.deleteBucketByName(bucketName);
  }

  @post('/createBucket')
  public async createBucket(
    @param.query.string('bucketName') bucketName: string,
  ): Promise<void> {
    await this.minioService.createBucket(bucketName);
  }
  @get('/get-object')
  public async getObject(@param.query.string('objectName') objectName: string) {
    return this.minioService.getObject(objectName);
  }
}
