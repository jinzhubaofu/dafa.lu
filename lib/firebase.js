import admin from 'firebase-admin';

if (!admin.apps.length) {
  const {
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY,
    FIREBASE_PROJECT_ID,
    FIREBASE_REALTIME_DATABASE_URL
  } = process.env;
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: FIREBASE_CLIENT_EMAIL,
      private_key: FIREBASE_PRIVATE_KEY,
      project_id: FIREBASE_PROJECT_ID
    }),
    databaseURL: FIREBASE_REALTIME_DATABASE_URL
  });
}

export default admin.database();
