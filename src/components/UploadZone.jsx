import { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import Button from './Button';

const ACCEPTED = '.pdf,.docx,.txt';
const MAX_SIZE = 5 * 1024 * 1024;

function UploadZone({ onFileSelect, disabled, error, dark = false }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    if (file.size > MAX_SIZE) {
      onFileSelect(null, 'File must be under 5 MB');
      return;
    }
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!['pdf', 'docx', 'txt'].includes(ext)) {
      onFileSelect(null, 'Only PDF, DOCX, and TXT files are supported');
      return;
    }
    onFileSelect(file, null);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (disabled) return;
    handleFile(e.dataTransfer.files[0]);
  };

  const zoneClass = dark
    ? dragOver
      ? 'border-primary bg-primary/10'
      : 'border-white/15 bg-white/5 hover:border-primary/50 hover:bg-white/[0.07]'
    : dragOver
      ? 'border-primary bg-green-50'
      : 'border-gray-300 bg-white hover:border-primary hover:bg-green-50/50';

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        onClick={() => !disabled && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={`flex w-full max-w-2xl cursor-pointer flex-col items-center gap-4 rounded-2xl border border-dashed px-4 py-10 transition-colors sm:gap-5 sm:px-8 sm:py-14 ${zoneClass} ${
          disabled ? 'pointer-events-none opacity-50' : ''
        }`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <FiUploadCloud className="h-7 w-7 text-primary" />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-700'}`}>
            Drop your resume here or click to browse
          </p>
          <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            PDF, DOCX, or TXT — max 5 MB
          </p>
        </div>
        <Button variant={dark ? 'outline' : 'secondary'} type="button" disabled={disabled}>
          Choose file
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED}
          className="hidden"
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>
      {error && (
        <p className="text-sm text-red-400" role="alert">{error}</p>
      )}
    </div>
  );
}

export default UploadZone;
