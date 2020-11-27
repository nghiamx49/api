const convertStringToBase64 = (data) => Buffer.from(data).toString('base64');

module.exports = convertStringToBase64;