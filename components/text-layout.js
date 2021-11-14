import { rootPath } from "../lib/text";

export default function TextLayout({
  title,
  subtitle,
  author,
  pdfLink,
  children,
}) {
  return (
    <div className="flex-grow">
      <h1 className="text-3xl text-center font-bold mt-8 mb-4">{title}</h1>
      {subtitle && <h2 className="text-xl text-center mb-4">{subtitle}</h2>}
      <div className="text-2xl text-center mb-16">{author}</div>
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
