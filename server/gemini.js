const { GoogleGenerativeAI } = require('@google/generative-ai');

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

const RESPONSE_SCHEMA = {
  type: 'object',
  properties: {
    score: { type: 'number' },
    strengths: { type: 'array', items: { type: 'string' } },
    weaknesses: { type: 'array', items: { type: 'string' } },
    suggestions: { type: 'array', items: { type: 'string' } },
  },
  required: ['score', 'strengths', 'weaknesses', 'suggestions'],
};

const SYSTEM_PROMPT =
  'ATS resume expert. Analyze resume for ATS compatibility only. ' +
  'Return JSON: score 0-100, max 3 strengths, max 3 weaknesses, max 5 actionable suggestions. ' +
  'Be concise. No markdown.';

async function analyzeResume(resumeText) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: MODEL,
    generationConfig: {
      temperature: 0.2,
      responseMimeType: 'application/json',
      responseSchema: RESPONSE_SCHEMA,
    },
  });

  const result = await model.generateContent([
    { text: SYSTEM_PROMPT },
    { text: resumeText },
  ]);

  const text = result.response.text();
  const parsed = JSON.parse(text);

  return {
    score: Math.min(100, Math.max(0, Math.round(parsed.score))),
    strengths: (parsed.strengths || []).slice(0, 3),
    weaknesses: (parsed.weaknesses || []).slice(0, 3),
    suggestions: (parsed.suggestions || []).slice(0, 5),
  };
}

module.exports = { analyzeResume };
