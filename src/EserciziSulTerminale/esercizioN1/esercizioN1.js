// dina@dina-HP-EliteBook-850-G4:~$ node
// Welcome to Node.js v16.20.2.
// Type ".help" for more information.
// > const crypto = require('crypto');
// undefined
// > console.log(Object.keys(crypto));
// [
//   'checkPrime',
//   'checkPrimeSync',
//   'createCipheriv',
//   'createDecipheriv',
//   'createDiffieHellman',
//   'createDiffieHellmanGroup',
//   'createECDH',
//   'createHash',
//   'createHmac',
//   'createPrivateKey',
//   'createPublicKey',
//   'createSecretKey',
//   'createSign',
//   'createVerify',
//   'diffieHellman',
//   'generatePrime',
//   'generatePrimeSync',
//   'getCiphers',
//   'getCipherInfo',
//   'getCurves',
//   'getDiffieHellman',
//   'getHashes',
//   'hkdf',
//   'hkdfSync',
//   'pbkdf2',
//   'pbkdf2Sync',
//   'generateKeyPair',
//   'generateKeyPairSync',
//   'generateKey',
//   'generateKeySync',
//   'privateDecrypt',
//   'privateEncrypt',
//   'publicDecrypt',
//   'publicEncrypt',
//   'randomBytes',
//   'randomFill',
//   'randomFillSync',
//   'randomInt',
//   'randomUUID',
//   'scrypt',
//   'scryptSync',
//   'sign',
//   'setEngine',
//   'timingSafeEqual',
//   'getFips',
//   'setFips',
//   'verify',
//   'Certificate',
//   'Cipher',
//   'Cipheriv',
//   'Decipher',
//   'Decipheriv',
//   'DiffieHellman',
//   'DiffieHellmanGroup',
//   'ECDH',
//   'Hash',
//   'Hmac',
//   'KeyObject',
//   'Sign',
//   'Verify',
//   'X509Certificate',
//   'secureHeapUsed',
//   'constants',
//   'webcrypto'
// ]
// undefined
// > const crypto = require('crypto');
// Uncaught SyntaxError: Identifier 'crypto' has already been declared
// > 

// undefined
// > const randomID = crypto.randomBytes(4).toString('hex');
// undefined
// > 
// > console.log('ID casuale:', randomID);
// ID casuale: 3633d989
// undefined
// > 