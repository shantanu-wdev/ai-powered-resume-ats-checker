import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

async function parsePdf(file) {
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  const pages = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    pages.push(content.items.map((item) => item.str).join(' '));
  }

  return pages.join('\n');
}

async function parseDocx(file) {
  const buffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer: buffer });
  return result.value;
}

async function parseTxt(file) {
  return file.text();
}

export async function parseResume(file) {
  const ext = file.name.split('.').pop()?.toLowerCase();

  let text;
  switch (ext) {
    case 'pdf':
      text = await parsePdf(file);
      break;
    case 'docx':
      text = await parseDocx(file);
      break;
    case 'txt':
      text = await parseTxt(file);
      break;
    default:
      throw new Error('Unsupported file type');
  }

  if (!text || text.trim().length < 50) {
    throw new Error('Could not extract text. Try a text-based PDF or DOCX file.');
  }

  return text;
}
