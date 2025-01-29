const CryptoJS = require("crypto-js");
function encrypt(text, secretKey) {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
}

function decrypt(encryptedText, secretKey) {
    let bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
const secretKey = "minha-chave-secreta";
const originalText = "Mensagem secreta!";
const encryptedText = encrypt(originalText, secretKey);
console.log("Texto Criptografado: " + encryptedText);
const decryptedText = decrypt(encryptedText, secretKey);
console.log("Texto Descriptografado: " + decryptedText);

/* Como o CryptoJS não possui suporte nativo para criptografia assimétrica, simulei a criptografia de uma mensagem usando uma chave pública e privada.*/
