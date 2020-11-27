const handleSuccessfulResponse = (message = 'Successful', data = {}) => ({
    code: 'SUCCESS',
    message,
    ...data
});

module.exports = handleSuccessfulResponse;