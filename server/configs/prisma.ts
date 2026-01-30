import "dotenv/config";
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaClient } from '../generated/prisma/client.js'
import ws from 'ws'

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set");
}

neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaNeon({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }
