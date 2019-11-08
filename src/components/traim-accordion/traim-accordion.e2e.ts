import { newE2EPage } from '@stencil/core/testing';

describe('traim-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-accordion></traim-accordion>');

    const element = await page.find('traim-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
