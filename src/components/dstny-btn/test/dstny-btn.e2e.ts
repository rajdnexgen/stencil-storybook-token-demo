import { newE2EPage } from '@stencil/core/testing';

describe('dstny-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dstny-btn></dstny-btn>');

    const element = await page.find('dstny-btn');
    expect(element).toHaveClass('hydrated');
  });
});
