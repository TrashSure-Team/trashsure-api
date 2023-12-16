import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { app } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {}

  async verifyIdToken(idToken: string) {
    const decodeToken = await this.firebaseApp.auth().verifyIdToken(idToken);
    return decodeToken;
  }
}
