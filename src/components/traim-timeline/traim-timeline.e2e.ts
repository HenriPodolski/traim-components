import { newE2EPage } from '@stencil/core/testing';

describe('traim-timeline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-timeline></traim-timeline>');

    const element = await page.find('traim-timeline');
    expect(element).toHaveClass('hydrated');
  });
});
