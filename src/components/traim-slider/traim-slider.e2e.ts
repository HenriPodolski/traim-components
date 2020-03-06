import { newE2EPage } from '@stencil/core/testing';

describe('traim-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-slider></traim-slider>');

    const element = await page.find('traim-slider');
    expect(element).toHaveClass('hydrated');
  });
});
