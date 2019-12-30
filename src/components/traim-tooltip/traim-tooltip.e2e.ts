import { newE2EPage } from '@stencil/core/testing';

describe('traim-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-tooltip></traim-tooltip>');

    const element = await page.find('traim-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
