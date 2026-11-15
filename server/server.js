const express = require('express');
const path = require('path');
const db = require('./testDB');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// GET /food route
app.get('/foods', (req, res) => {
    console.log('GET /foods was called');
    const menu = db.getAll();
    res.status(200).json(menu);
});

// 404 handling
app.use((req, res) => {
    console.log('404 error - route not found: ', req.url);
    res.status(404).json({ message: 'Route not found' });
});

// start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is runnon on port ${PORT}`);
    });
}

// export app for testing
module.exports = app;