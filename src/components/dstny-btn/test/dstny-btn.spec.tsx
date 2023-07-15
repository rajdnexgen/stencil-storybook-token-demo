import { newSpecPage } from '@stencil/core/testing';
import { DstnyBtn } from '../dstny-btn';

describe('dstny-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DstnyBtn],
      html: `<dstny-btn></dstny-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <dstny-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dstny-btn>
    `);
  });
});
