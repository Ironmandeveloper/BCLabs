import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI ?? '';

let mongodbClient: Promise<MongoClient> | null = null;

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

const client = new MongoClient(uri)
mongodbClient = client.connect()

export default mongodbClient