import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const excludeComponents = [
  'animatable-component',
  'animatable-cube',
  'duet-date-picker',
];
export const config: Config = {
  namespace: 'dstny-ds',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {src: '../src/css/**/*', dest: 'css/', warn: true}
      ],
    },
    reactOutputTarget({
      componentCorePackage: '@telepo/dstny-ds',
      proxiesFile: './package/dstny-ds-react-library\/lib/components/stencil-generated/index.ts',
      excludeComponents,
      loaderDir: './loader',
    }),
    angularOutputTarget({
      componentCorePackage: '@telepo/dstny-ds',
      directivesProxyFile: 'angular-workspace/projects/dstny-ds/src/lib/stencil-generated/components.ts',
      directivesArrayFile: 'angular-workspace/projects/dstny-ds/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@telepo/dstny-ds',
      proxiesFile: './package/dstny-ds-vue-library/lib/components.ts',
    }),
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json',
    },
    {
      type: 'docs-json',
      file: './dist/scale-components.json',
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  extras: {
    cloneNodeFix: true,
  },
};

