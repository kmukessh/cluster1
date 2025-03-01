const express = require('express');
const app = express();
const path = require('path');

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 80;  // Change from 3000 to 80
app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});
