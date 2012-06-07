var Crypto = function () {
    this.createCredentials = function (details) { return new Credentials(); };
    this.createHash = function (algorithm) { return new Hash(); };
    this.createHmac = function (algorithm, key) { return new hmac; };
    this.createCipher = function (algorithm, password) { return new Cipher(); };
    this.createCipheriv = function (algorithm, key, iv) { return new Cipher(); };
    this.createDecipher = function (algorithm, password) { return new Decipher(); };
    this.createDecipheriv = function (algorithm, key, iv) { return new Decipher(); };
    this.createSign = function (algorithm) { return new Signer(); };
    this.createVerify = function (algorithm) { return new Verify(); }
    this.createDiffieHellman = function (args) { return new DiffieHellman(); };
    this.getDiffieHellman = function (group_name) { };
    this.pbkdf2 = function (password, salt, iterations, keylen, callback) { };
    this.randomBytes = function (size, callback) { };
};

var Credentials = function () { }

var Hash = function () {
    this.update = function (data, input_encoding) { };
    this.digest = function (encoding) { };
};

var Hmac = function () {
    this.update = function (data) { };
    this.digest = function (encoding) { };
};

var Cipher = function () {
    this.update = function (data, input_encoding, output_encoding) { };
    this.final = function (output_encoding) { };
    this.setAutoPadding = function (auto_padding) { };
};

var Decipher = function () {
    this.update = function (data, input_encoding, output_encoding) { };
    this.final = function (output_encoding) { };
    this.setAutoPadding = function (auto_padding) { };
};

var Signer = function () {
    this.update = function (data) { };
    this.sign = function (private_key, output_format) { };
};

var Verifier = function () {
    this.update = function (data) { };
    this.verify = function (object, signature, signature_format) { };
};
var DiffieHellman = function () {
    this.generateKeys = function (encoding) { };
    this.computeSecret = function (other_public_key, input_encoding, output_encoding) { };
    this.getPrime = function (encoding) { };
    this.getGenerator = function (encoding) { };
    this.getPublicKey = function (encoding) { };
    this.getPrivateKey = function (encoding) { };
    this.setPublicKey = function (public_key, encoding) { };
    this.setPrivateKey = function (public_key, encoding) { };
};
