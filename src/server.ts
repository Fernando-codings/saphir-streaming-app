import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
// import { Prisma } from '@prisma/client';

import { prisma } from './prisma/client.ts';

dotenv.config();

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Endpoint test
app.get('/health', (req, res) => {
  res.json({ status: 'OKay', message: 'Server is running' });
});

// Fonction pour tester la connexion à PostgreSQL
async function testDBConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to PostgreSQL via Prisma');
  } catch (err) {
    console.error('❌ Failed to connect to PostgreSQL', err);
    process.exit(1); // Arrêter le serveur si DB non accessible
  }
}

// Démarrage serveur
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await testDBConnection();
});
