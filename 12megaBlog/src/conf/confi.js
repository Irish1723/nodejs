const conf={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    projectId: String(import.meta.env.VITE_APP_PROJECT_URL),
    databaseId: String(import.meta.env.VITE_APP_DATABASE_URL),
    collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf;