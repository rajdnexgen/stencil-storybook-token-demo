import { html } from 'lit-html';
import readme from './readme.md';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' }, 
    variant: {
      control: {
        type: 'inline-radio',
        options: [
          'primary',
          'secondary',
          'tertiary'
        ],
      },
    },
    type: {
      control: {
        type: 'inline-radio',
        options: [
          'submit',
          'button',
          'reset'
        ],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: [
          'extra-large',
          'large',
          'small'
        ],
      },
    },
  },

  parameters: {
    notes: readme,
  }
};

const Template = ({ label, variant, size, type, disabled }) => (
  html`<dstny-button
  type=${type} 
  size=${size} 
  variant=${variant} 
  disabled=${disabled} 
  label=${label} 
  />
  `
)

export const MultiTheme = Template.bind({});
MultiTheme.args = {
  type:'button',
  size: 'large',
  variant: 'primary',
  disabled: false,
  label: 'Button CTA',
};

