"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  UploadCloud,
  File as FileIcon,
  X,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Button } from "./Button";

export interface DropzoneProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  accept?: string; // e.g. "application/pdf, image/*"
  /** Max upload size in MB. Use `Infinity` (or `0`) for no limit. Default: 50. */
  maxSizeMB?: number;
  multiple?: boolean;
  hint?: string;
  className?: string;
}

/* Display-only mapping of the existing `accept` prop to short format
 * chips (PDF, JPG, DOCX…). Pure render derivation — no state, no
 * handlers, no effect on which files are accepted. Unknown extension
 * tokens fall back to their uppercased extension; unknown MIME tokens
 * to their subtype; anything longer than 6 chars is skipped. */
const ACCEPT_LABELS: Record<string, string> = {
  "application/pdf": "PDF",
  ".pdf": "PDF",
  "image/*": "Images",
  "image/png": "PNG",
  ".png": "PNG",
  "image/jpeg": "JPG",
  ".jpg": "JPG",
  ".jpeg": "JPG",
  "image/webp": "WEBP",
  ".webp": "WEBP",
  "image/gif": "GIF",
  ".gif": "GIF",
  "image/svg+xml": "SVG",
  ".svg": "SVG",
  ".heic": "HEIC",
  ".heif": "HEIC",
  ".doc": "DOC",
  "application/msword": "DOC",
  ".docx": "DOCX",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "DOCX",
  ".xls": "XLS",
  ".xlsx": "XLSX",
  ".ppt": "PPT",
  ".pptx": "PPTX",
  ".txt": "TXT",
  "text/plain": "TXT",
  ".csv": "CSV",
  "text/csv": "CSV",
  ".json": "JSON",
  "application/json": "JSON",
  ".zip": "ZIP",
  "application/zip": "ZIP",
  "audio/*": "Audio",
  "video/*": "Video",
};

function acceptChips(accept?: string): string[] {
  if (!accept) return [];
  const seen = new Set<string>();
  const chips: string[] = [];
  for (const raw of accept.split(",")) {
    const token = raw.trim().toLowerCase();
    if (!token) continue;
    let label = ACCEPT_LABELS[token];
    if (!label && token.startsWith(".")) {
      label = token.slice(1).toUpperCase();
    }
    if (!label && token.includes("/")) {
      const subtype = token.split("/").pop() ?? "";
      if (subtype && subtype !== "*") {
        label = subtype.replace(/[^a-z0-9]/gi, "").toUpperCase();
      }
    }
    if (label && label.length <= 6 && !seen.has(label)) {
      seen.add(label);
      chips.push(label);
    }
  }
  return chips.slice(0, 6);
}

export const Dropzone: React.FC<DropzoneProps> = ({
  files,
  onFilesChange,
  accept,
  maxSizeMB = 50,
  multiple = true,
  hint,
  className = "",
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasSizeLimit =
    Number.isFinite(maxSizeMB) && maxSizeMB > 0 && maxSizeMB !== Infinity;

  const resolvedHint =
    hint ??
    (hasSizeLimit
      ? `PDF, Images, or Text files up to ${maxSizeMB}MB`
      : "PDF, Images, or Text files — no file size limit");

  const formatChips = acceptChips(accept);

  const validateAndAddFiles = useCallback(
    (incomingFiles: FileList | File[]) => {
      setErrorMessage(null);
      const valid: File[] = [];
      const maxSizeBytes = hasSizeLimit ? maxSizeMB * 1024 * 1024 : null;

      Array.from(incomingFiles).forEach((file) => {
        if (maxSizeBytes != null && file.size > maxSizeBytes) {
          setErrorMessage(
            `File "${file.name}" exceeds limit of ${maxSizeMB}MB.`,
          );
          return;
        }
        valid.push(file);
      });

      if (valid.length > 0) {
        if (multiple) {
          onFilesChange([...files, ...valid]);
        } else {
          onFilesChange([valid[0]]);
        }
      }
    },
    [files, multiple, onFilesChange, hasSizeLimit, maxSizeMB],
  );

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndAddFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files.length > 0) {
        validateAndAddFiles(e.clipboardData.files);
      }
    };
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [validateAndAddFiles]);

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    onFilesChange(updated);
  };

  const moveFile = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= files.length) return;
    const updated = [...files];
    const [moved] = updated.splice(index, 1);
    updated.splice(newIndex, 0, moved);
    onFilesChange(updated);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {/* Drop Surface */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Choose files to upload"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        className={`upload-surface dz-surface relative flex min-h-64 flex-col items-center justify-center px-5 py-9 text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
          isDragOver ? "dz-surface--active" : ""
        }`}
      >
        <span className="dz-sheen" aria-hidden="true" />
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => {
            if (e.target.files) validateAndAddFiles(e.target.files);
            e.target.value = "";
          }}
          className="hidden"
        />

        <div className="dz-icon mb-5" aria-hidden="true">
          <UploadCloud className="dz-icon-glyph" strokeWidth={1.4} />
        </div>

        <h3 className="choose-file-label dz-choose">
          <FileIcon className="h-4 w-4" aria-hidden="true" />
          {multiple ? "Choose files" : "Choose a file"}
        </h3>

        <p className="mt-3 text-sm text-[var(--ink-soft)]">
          or drag and drop here
        </p>
        <p className="mt-3 max-w-lg text-xs leading-5 text-[var(--ink-soft)]">
          {resolvedHint}
        </p>

        {formatChips.length > 0 && (
          <div className="dz-formats">
            {formatChips.map((chip) => (
              <span key={chip} className="dz-format-chip">
                {chip}
              </span>
            ))}
          </div>
        )}

        <p className="dz-paste mt-3 text-[11px] text-[var(--ink-faint)]">
          You can also paste a file with <kbd>Ctrl+V</kbd> / <kbd>Cmd+V</kbd>
        </p>
      </div>

      {errorMessage && (
        <p className="text-xs text-[var(--danger)] font-medium text-center">
          {errorMessage}
        </p>
      )}

      {/* Selected File Chips List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <div className="file-list-head flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)] px-1">
            <span>Selected Files ({files.length})</span>
            {multiple && files.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onFilesChange([]);
                }}
              >
                Clear all
              </Button>
            )}
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className={`file-card flex items-center justify-between p-3 ${
                  files.length === 1 ? "file-card--solo" : ""
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <span className="file-card-ext" aria-hidden="true">
                    {file.name.includes(".")
                      ? file.name.split(".").pop()?.toUpperCase()
                      : "FILE"}
                  </span>
                  <FileIcon className="file-card-icon w-5 h-5 text-[var(--accent)] shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-[var(--ink)] truncate">
                      {file.name}
                    </span>
                    <span className="text-xs font-mono text-[var(--ink-faint)]">
                      {formatFileSize(file.size)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {multiple && files.length > 1 && (
                    <>
                      <button
                        type="button"
                        disabled={index === 0}
                        onClick={() => moveFile(index, "up")}
                        className="p-1 rounded text-[var(--ink-faint)] hover:text-[var(--ink)] disabled:opacity-30 cursor-pointer"
                        title="Move up"
                      >
                        <ArrowUp className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        disabled={index === files.length - 1}
                        onClick={() => moveFile(index, "down")}
                        className="p-1 rounded text-[var(--ink-faint)] hover:text-[var(--ink)] disabled:opacity-30 cursor-pointer"
                        title="Move down"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-1 rounded text-[var(--ink-faint)] hover:text-[var(--danger)] cursor-pointer"
                    title="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
