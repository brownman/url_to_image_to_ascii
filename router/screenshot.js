var screenshot = require('../controllers/screenshot');
app.get('/screenshot', screenshot.capture);
