import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';
import { DEFAULT_APP_LOCALE } from './constants';
import { isSupportedAppLanguagesCodes } from './types';
import { PorfolioUserConverter } from './converters';

initializeApp();

const db = getFirestore();

export const portfolioUser = onRequest(
  { cors: ['https://paulmejiafeliz.me'] }, // TODO: Move this to env variable
  async (request, response) => {
    const languageQuery = request.query.lang;

    let language = DEFAULT_APP_LOCALE;

    if (
      typeof languageQuery == 'string' &&
      isSupportedAppLanguagesCodes(languageQuery)
    ) {
      language = languageQuery;
    }

    logger.info('API request received', { language });

    const userRef = db
      .collection('portfolio-users')
      .withConverter(new PorfolioUserConverter(language))
      .doc('1');
    const userDoc = await userRef.get(); // TODO: Try to move common logic to models lib

    if (userDoc.exists) {
      const userData = userDoc.data(); // TODO: Add multi language support
      if (userData) {
        response.send(userData);
        return;
      }
    }

    response.status(404).send({ error: 'Not found' });
  }
);
