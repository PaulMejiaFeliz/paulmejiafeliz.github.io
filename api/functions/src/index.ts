import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';

initializeApp();

const db = getFirestore();

export const portfolioUser = onRequest(
  { cors: ['https://paulmejiafeliz.me'] },
  async (request, response) => {
    logger.info('API request received', { structuredData: true });

    const userRef = db.collection('portfolio-user').doc('1');
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      const userData = userDoc.data();
      if (userData) {
        response.send({
          ...userData,
          portfolio: {
            summary: userData.summary,
            skills: ['React', 'Shopify'],
          },
        });
        return;
      }
    }

    response.status(404).send({ error: 'Not found' });
  }
);
