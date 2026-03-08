const express = require('express');
const app = express();
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'User 1' }]);
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    res.json({ success: true, user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
