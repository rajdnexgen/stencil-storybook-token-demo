import { reactOutputTarget } from '@stencil/react-output-target';
import {
  vueOutputTarget,
  ComponentModelConfig,
} from '@nowseemee/vue-output-target';
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: [
      'dstny-input',
      'dstny-text-field',
      'dstny-textarea',
      'dstny-dropdown',
      'dstny-switch',
    ],
    event: 'scaleChange',
    targetAttr: 'value',
  },
  // These do not work with the way the plugin "utils"'s wires events,
  // and probably Vue doing something different for native input[type=checkbox|radio]
  // {
  //   elements: [
  //     'dstny-checkbox',
  //     'dstny-radio-button'
  //   ],
  //   event: 'scaleChange',
  //   targetAttr: 'value',
  // },
  {
    elements: ['dstny-slider'],
    event: 'scaleInput',
    targetAttr: 'value',
  },
];

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['dstny-input'],
    event: 'scaleChange',
    targetAttr: 'value',
    type: 'text',
  },
  // Tests won't pass for these
  // https://github.com/ionic-team/stencil-ds-output-targets/blob/master/packages/example-project/component-library-angular/__tests__/my-checkbox.spec.ts
  /* {
      elementSelectors: ['dstny-input[type=checkbox]'],
      event: 'scaleChange',
      targetAttr: 'checked',
      type: 'boolean'
    },
    {
      elementSelectors: ['dstny-input[type=radio]'],
      event: 'scaleChange',
      targetAttr: 'checked',
      type: 'radio'
    },
    {
      elementSelectors: ['dstny-input[type=select]'],
      event: 'scaleChange',
      targetAttr: 'value',
      type: 'select'
    }, */
  {
    elementSelectors: ['dstny-slider'],
    event: 'scaleChange',
    targetAttr: 'value',
    type: 'number',
  },
];

const excludeComponents = [
  'animatable-component',
  'animatable-cube',
  'duet-date-picker',
];

export const frameworkTargets = [
  reactOutputTarget({
    componentCorePackage: '@telepo/dstny-ds',
    proxiesFile: '../components-react/src/components.ts',
    excludeComponents,
  }),
  vueOutputTarget({
    componentCorePackage: '@telepo/dstny-ds',
    proxiesFile: '../components-vue/src/proxies.ts',
    componentModels: vueComponentModels,
    excludeComponents,
  }),
  angularOutputTarget({
    componentCorePackage: '@telepo/dstny-ds',
    directivesProxyFile: '../components-angular/src/directives/proxies.ts',
    directivesArrayFile:
      '../components-angular/src/directives/proxies-list.tsx',
    directivesUtilsFile:
      '../components-angular/src/directives/proxies-utils.ts',
    valueAccessorConfigs: angularValueAccessorBindings,
    excludeComponents,
  }),
];
