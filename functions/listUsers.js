const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.listAllUsers = functions.https.onRequest((req, res) => {
  const maxResults = 1000; // set maximum number of users to fetch

  admin.auth().listUsers(maxResults)
    .then((userRecords) => {
      userRecords.users.forEach((user) => console.log(user.toJSON()));
      res.status(200).send(userRecords.users);
    })
    .catch((error) => {
      console.log('Error listing users:', error);
      res.status(500).send({ error: 'Failed to fetch user list' });
    });
});