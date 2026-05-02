"use client";

import { useCallback } from "react";

interface DocsMarkdownProps {
  html: string;
}

function decodeBase64Utf8(value: string): string {
  const binary = window.atob(value);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function DocsMarkdown({ html }: DocsMarkdownProps) {
  const handleClick = useCallback(async (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const button = target.closest(".docs-copy-btn") as HTMLButtonElement | null;

    if (!button) {
      return;
    }

    const encoded = button.dataset.copyB64;
    if (!encoded) {
      return;
    }

    try {
      const commandText = decodeBase64Utf8(encoded);
      await navigator.clipboard.writeText(commandText);
      const originalLabel = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = originalLabel ?? "Copy";
      }, 1400);
    } catch {
      button.textContent = "Failed";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1400);
    }
  }, []);

  return (
    <div
      className="docs-markdown mt-4 text-[16px]"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
