const cors = require('cors-anywhere');

cors.createServer({}).listen(process.env.PORT, () => console.log('Proxy running'));
