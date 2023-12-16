import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FirebaseAdminConfig } from 'src/config/firebase-admin.config';
import { FirebaseService } from './firebase.service';

const firebaseProvider = {
  provide: 'FIREBASE_APP',
  useFactory: () => {
    return admin.initializeApp({
      credential: admin.credential.cert(FirebaseAdminConfig),
      databaseURL: `https://${FirebaseAdminConfig.projectId}.firebaseio.com`,
    });
  },
};

@Module({
  providers: [firebaseProvider],
  exports: [FirebaseService],
})
export class FirebaseModule {}
