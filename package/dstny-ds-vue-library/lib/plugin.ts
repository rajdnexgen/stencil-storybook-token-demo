import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@telepo/dstny-ds/loader';

export const DstnyDsLib: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};