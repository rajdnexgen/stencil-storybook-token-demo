import { html } from 'lit-html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {
  defineCustomElements,
  applyPolyfills,
} from '../loader';


applyPolyfills().then(() => {
  defineCustomElements(window);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
  },
  a11y: {
    config: {
      rules: [
        {
          id: 'list',
          enabled: false,
        },
        {
          id: 'listitem',
          enabled: false,
        },
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
  viewMode: 'docs',
  options: {
    storySort: {
      order: [
        'Scale Design System',
        'About Scale',
        'FAQ',
        'New Release',
        ['Release Notes', 'Sketch Library Update'],
        'Setup & Info',
        [
          'Getting Started For Designers',
          'Getting Started For Developers',
          'Scale and Vue',
          'Scale and Angular',
          'Scale and React',
          'Accessibility',
          'Browser Support',
        ],
        'Guidelines',
        [
          'Design Tokens',
          'Light and Dark Mode',
          'Customization and Themes',
          'Grid',
          'Spacings',
          'Typography',
          'Colors',
          'Shadows',
        ],
        'Update History',
        ['Design', 'Development'],
        'Components',
        'Beta Components',
        'Deprecated Components',
        'Contact',
        'Legal',
        ['Disclaimer', 'Legal Notice', 'Privacy'],
      ],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Component Theme',
    description: 'Global theme for components',
    defaultValue: 'dstny-base-theme',
    toolbar: {
      
  
      // array of plain string values or MenuItem shape (see below)
      items: [
        {value: 'dstny-base-theme', title: 'Dstny'},
        {value: 'brand-b-theme', title: 'Non-Dstny'}
      ],
    },
  },
};

// const storyWithTheme=(story, context)=>{
//   console.log(context.globals.theme);
//   const theme = context.globals.theme;
//   return (
//     (story) => html`<div class='${theme}'>${story()}</div>`
//   )
// }

// export const decorators = [storyWithTheme];

export const decorators = [(story, context) => 
  html`<div class='${context.globals.theme}'>${story()}</div>`]

// export const decorators = [(story) => html`<div class='${theme}'>${story()}</div>`]