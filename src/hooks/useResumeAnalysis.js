import { useState, useCallback } from 'react';
import { parseResume } from '../utils/resumeParser';
import { normalizeResumeText } from '../utils/normalizeResumeText';
import { analyzeResume } from '../utils/api';

export function useResumeAnalysis() {
  const [status, setStatus] = useState('idle');
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState(null);

  const reset = useCallback(() => {
    setStatus('idle');
    setReport(null);
    setError(null);
    setFileName(null);
  }, []);

  const analyze = useCallback(async (file, uploadError) => {
    if (uploadError) {
      setError(uploadError);
      return;
    }
    if (!file) return;

    setError(null);
    setReport(null);
    setFileName(file.name);

    try {
      setStatus('parsing');
      const rawText = await parseResume(file);
      const resumeText = normalizeResumeText(rawText);

      setStatus('analyzing');
      const result = await analyzeResume(resumeText);
      setReport(result);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }, []);

  const retry = useCallback(() => {
    reset();
  }, [reset]);

  return { status, report, error, fileName, analyze, retry, reset };
}
