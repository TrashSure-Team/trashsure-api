export const StorageConfig = {
  projectId: process.env.GCP_PROJECT_ID,
  privateKey: process.env.GCP_PRIVATE_KEY!.split(String.raw`\n`).join('\n'),
  clientEmail: process.env.GCP_CLIENT_EMAIL,
  bucketName: process.env.GCP_STORAGE_BUCKET_NAME,
};
