const convertBase64ToString = (data) => Buffer.from(data, 'base64').toString('ascii');

module.exports = convertBase64ToString;