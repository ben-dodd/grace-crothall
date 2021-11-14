import { rootPath } from "../lib/text";

export default function TextLayout({
  title,
  subtitle,
  author,
  pdfLink,
  children,
}) {
  return (
    <div className="flex-grow px-2">
      <h1 className="text-3xl max-w-4xl mx-auto font-bold mt-8 mb-2">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-xl max-w-4xl mx-auto mb-4">{subtitle}</h2>
      )}
      <div className="text-2xl max-w-4xl mx-auto mb-16">{author}</div>
      <div className="mx-auto max-w-2xl px-4">
        {children}
        {pdfLink && (
          <div className="font-bold underline py-4">
            <a href={`${rootPath}${pdfLink}`} target="_blank">
              View as PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
