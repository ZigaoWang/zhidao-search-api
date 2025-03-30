# Zhidao Search API

A Node.js API service for image search using Tavily API to provide images and supporting information for AI-generated reports.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with:
   ```
   TAVILY_API_KEY=your_tavily_api_key
   PORT=3000
   ```

## Usage

### Start the server

Development mode:
```
npm run dev
```

Production mode:
```
npm start
```

The server will run on `http://localhost:3000` by default.

### API Endpoints

#### Health Check
```
GET /health
```

#### Search
```
POST /api/search
Content-Type: application/json

{
  "query": "your search topic"
}
```

Example response:
```json
{
  "results": [...],
  "images": [
    {
      "url": "https://example.com/image.jpg",
      "description": "Image description"
    }
  ],
  "query": "your search topic"
}
```

## Example Usage with cURL

```bash
curl -X POST http://localhost:3000/api/search \
  -H "Content-Type: application/json" \
  -d '{"query": "AI hallucination"}'
``` 