import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'dstny-ds',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'dstny-ds-react-library',
      proxiesFile: 'package/dstny-ds-react-library\/lib/components/stencil-generated/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: 'dstny-ds',
      directivesProxyFile: 'angular-workspace/projects/dstny-ds/src/lib/stencil-generated/components.ts',
      directivesArrayFile: 'angular-workspace/projects/dstny-ds/src/lib/stencil-generated/index.ts'
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

