import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./hooks/useResumeAnalysis', () => ({
  useResumeAnalysis: () => ({
    status: 'idle',
    report: null,
    error: null,
    fileName: null,
    analyze: jest.fn(),
    retry: jest.fn(),
    reset: jest.fn(),
  }),
}));

test('renders hero heading', () => {
  render(<App />);
  expect(screen.getByText(/is your resume ats-ready/i)).toBeInTheDocument();
});
