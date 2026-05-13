const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Healthy', timestamp: new Date() });
});

module.exports = app; // Export for testing
if (require.main === module) {
    app.listen(3000, () => console.log('Server running on port 3000'));
}