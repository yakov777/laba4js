const app = require('./server');

const config = require('../config.js');

app.listen(config.get('port'), config.get('ip'), () => console.log(`App started successfully on port http://${config.get('ip')}:${config.get('port')}`));
