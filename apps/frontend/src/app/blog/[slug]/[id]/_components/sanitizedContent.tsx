"use client";
import DOMPurify from "dompurify";
type Props = {
  content: string;
  className?: string;
};

const SanitizedContent = ({ content, className }: Props) => {
  const cleanHtml = DOMPurify.sanitize("<script></script>" + content);
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default SanitizedContent;
