/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// const functions = require('firebase-functions');
// const axios = require('axios');

// const AIRTABLE_API_URL = 'https://api.airtable.com/v0/YOUR_APP_ID';
// const AIRTABLE_API_KEY =  process.env.REACT_APP_AIRTABLE_API_KEY;



// const airtable = axios.default.create({
//     baseURL: AIRTABLE_API_URL,
//     headers: {
//         'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
//         'Content-Type': 'application/json'
//     }
// });

// exports.createRecord = functions.https.onCall(async (data, context) => {
//     const { tableName, record } = data;
//     const response = await airtable.post(`/${tableName}`, { fields: record });
//     return response.data;
// });

// exports.getRecords = functions.https.onCall(async (data, context) => {
//   const { tableName } = data;
//   const response = await airtable.get(`/${tableName}`);
//   return response.data.records.map(record => record.fields);
// });