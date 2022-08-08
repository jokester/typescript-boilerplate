import type React from 'react';
import { Button } from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { buildConfig } from '../src/config/build-config';
import { serviceRuntimeConfig } from '../src/config/runtime-config';
import { useEffect } from 'react';
import { dummyImages } from '@jokester/ts-commonutil/lib/frontend/dummy-img';

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

const muiComponents = (
  <>
    <h1 className="text-center py-4">Material-UI component: Buttons</h1>
    <div className="text-center space-x-4">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
    <hr className="py-4" />
    <h1 className="text-center py-4">Material-UI component: Icons</h1>
    <div className="text-center space-x-4">
      <ThreeDRotation />
    </div>
    <hr className="py-4" />
  </>
);
const ComponentsDemoPage: React.FC = () => {
  useEffect(() => {
    fetch('/api/server_config').then(async (res) => {
      console.debug('server runtime config from API', await res.json());
    });
  }, []);

  console.debug('ComponentDemo', buildConfig, serviceRuntimeConfig);
  return (
    <>
      {tailwindComponents}
      {muiComponents}
    </>
  );
};

export default ComponentsDemoPage;
