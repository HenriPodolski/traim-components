import { newE2EPage } from '@stencil/core/testing';

describe('traim-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-toggle></traim-toggle>');

    const element = await page.find('traim-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
