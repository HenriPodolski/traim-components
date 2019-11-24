import { newE2EPage } from '@stencil/core/testing';

describe('traim-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-tabs></traim-tabs>');

    const element = await page.find('traim-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
