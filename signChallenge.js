const crypto = require('crypto');

const { KEY_SECRET } = process.env;

const signChallenge = (keyId) => {
  return `${crypto.createHmac('sha1', KEY_SECRET).update(keyId).digest('hex')}`;
};


module.exports = signChallenge;