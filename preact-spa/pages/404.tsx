import { useEffect } from 'preact/compat';
import { useRouter } from 'preact-router';

export function NotFoundPage(props: any) {
  const [, navigate] = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', true);
    }, 5e3);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);
  return <div className="container py-8 text-center">Page not found... You will be redirected in 5s.</div>;
}
