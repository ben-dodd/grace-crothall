export default function TextLayout({ title, author, pdfLink, children }) {
  return (
    <div className="flex-grow">
      <div className="text-3xl text-center font-bold mt-8 mb-4">{title}</div>
      <div className="text-2xl text-center mb-16">{author}</div>
      <div className="mx-auto max-w-2xl px-4">{children}</div>
    </div>
  );
}
