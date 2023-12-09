import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { StorageConfig } from 'src/config/storage.config';

@Injectable()
export class StorageService {
  private storage: Storage;
  private bucket: string;

  constructor() {
    this.storage = new Storage({
      projectId: StorageConfig.projectId,
      credentials: {
        client_email: StorageConfig.clientEmail,
        private_key: StorageConfig.privateKey,
      },
    });
    this.bucket = StorageConfig.bucketName;
  }

  async upload(file: Express.Multer.File): Promise<string> {
    const fileName = `${Date.now()}-${file.originalname}`;
    const fileStream = file.buffer;

    const bucket = this.storage.bucket(this.bucket);
    const fileUpload = bucket.file(fileName);

    await fileUpload.save(fileStream, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    return fileUpload.publicUrl();
  }
}
