import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div>
      <h1 className='text-xl text-center'>404 - Page Not Found</h1>
      <section className='text-center my-4'>
        <Link href='/'>Back to site root</Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
