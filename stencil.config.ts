import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { frameworkTargets } from './framework-targets';

export const config: Config = {
  namespace: 'dstny-ds',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@dstny-ds/dstny-ds',
      proxiesFile: '/package/@dstny-ds\/dstny-ds-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};

