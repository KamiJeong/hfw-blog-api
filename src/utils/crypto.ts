import * as CryptoJS from 'crypto-js';

/**
 * secretKey for crypto
 */
const secretKey = 'UkS7BCpWN4SM20R9JPOSAsUXQDeobN0h';

/**
 * Encrypt
 * @param data
 */
export const aesEncrypt = (data: string) => {
  const cipher = CryptoJS.AES.encrypt(
    data,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(secretKey.substring(0, 16)),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    },
  );

  return cipher.ciphertext.toString(CryptoJS.enc.Base64);
};

/**
 * Decrypt
 * @param data
 */
export const aesDecrypt = (data: string) => {
  const cipher = CryptoJS.AES.decrypt(
    data,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(secretKey.substring(0, 16)),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    },
  );
  return cipher.toString(CryptoJS.enc.Utf8);
};
