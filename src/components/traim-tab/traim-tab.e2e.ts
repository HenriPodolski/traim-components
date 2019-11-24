import { newE2EPage } from '@stencil/core/testing';

describe('traim-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-tab></traim-tab>');

    const element = await page.find('traim-tab');
    expect(element).toHaveClass('hydrated');
  });
});
