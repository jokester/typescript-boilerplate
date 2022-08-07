import type React from 'react';
import { dummyImages } from '../src/dummy/dummy-img';

const tailwindComponents = (
  <>
    <h1 className="text-center py-4">TailwindCss-styled component: ChitChat</h1>
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={dummyImages.dummyImage({ text: 'avatar' })} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
    <hr className="py-4" />
  </>
);
const ComponentsDemoPage: React.FC = () => {
  return <>{tailwindComponents}</>;
};

export default ComponentsDemoPage;
