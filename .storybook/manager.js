import { addons } from "@storybook/addons";
import dstnyTheme from "./dstnyTheme.js";

addons.setConfig({
  theme: dstnyTheme,
});

addons.setConfig({
  previewTabs: {
    // the order of the tabs is configured by the order here
    // null means no override for the title
    'storybook/docs/panel': null,
    '@dstny-ds/sidebar-links-addon': null,
    canvas: null,
  },
});
