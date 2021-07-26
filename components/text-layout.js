export default function TextLayout({ title, author, pdfLink, children }) {
  return (
    <div className='flex-grow'>
        <div className='text-3xl text-center font-bold my-8'>{title}</div>
        <div className='text-2xl text-center mb-16'>{author}</div>
        <div className='mx-auto max-w-2xl'>
          {children}
        </div>
    </div>
  );
}
