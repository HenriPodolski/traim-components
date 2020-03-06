import { newE2EPage } from '@stencil/core/testing';

describe('traim-slider-slide', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-slider-slide></traim-slider-slide>');

    const element = await page.find('traim-slider-slide');
    expect(element).toHaveClass('hydrated');
  });
});
