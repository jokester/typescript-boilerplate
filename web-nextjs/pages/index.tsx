import App from '../src/App';
import Link from 'next/link';

const Index = (props) => (
  <div>
    <p>Hello Next.js in tsx</p>
    <Link href="/"><button>here</button></Link>
  </div>
)

export default Index;
