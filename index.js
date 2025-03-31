const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { searchWithImages } = require('./services/tavily');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Search endpoint
app.post('/api/search', async (req, res) => {
  try {
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }
    
    const results = await searchWithImages(query);
    res.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    res.status(500).json({ error: 'An error occurred during the search', message: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 