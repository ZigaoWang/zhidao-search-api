const { tavily } = require('@tavily/core');
require('dotenv').config();

const apiKey = process.env.TAVILY_API_KEY;
if (!apiKey) {
  throw new Error('TAVILY_API_KEY is required in environment variables');
}

const client = tavily({ apiKey });

/**
 * Search for images and information based on a query using Tavily
 * @param {string} query - The search query
 * @returns {Promise<Object>} - Search results including images
 */
async function searchWithImages(query) {
  try {
    console.log('Searching for query:', query);
    const results = await client.search(query, {
      includeImages: true,
      includeImageDescriptions: true,
      searchDepth: 'basic'
    });
    console.log('Search results:', results);
    return results;
  } catch (error) {
    console.error('Error searching with Tavily:', error);
    throw error;
  }
}

module.exports = {
  searchWithImages
}; 