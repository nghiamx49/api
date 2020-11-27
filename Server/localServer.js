const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))