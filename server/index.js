require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const { analyzeResume } = require('./gemini');

const app = express();
const PORT = process.env.PORT || 3001;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '32kb' }));

if (!isProd) {
  app.use(cors({ origin: 'http://localhost:3000' }));
}

app.post('/api/analyze', async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText || typeof resumeText !== 'string') {
      return res.status(400).json({ error: 'resumeText is required' });
    }

    const trimmed = resumeText.trim();

    if (trimmed.length < 100) {
      return res.status(400).json({ error: 'Resume text is too short to analyze' });
    }

    if (trimmed.length > 5000) {
      return res.status(400).json({ error: 'Resume text exceeds maximum length' });
    }

    const report = await analyzeResume(trimmed);
    res.json(report);
  } catch (err) {
    console.error('Analysis error:', err.message);
    res.status(500).json({ error: 'Failed to analyze resume. Please try again.' });
  }
});

if (isProd) {
  const buildPath = path.join(__dirname, '..', 'build');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
