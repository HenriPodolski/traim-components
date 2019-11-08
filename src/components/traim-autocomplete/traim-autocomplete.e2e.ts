import { newE2EPage } from '@stencil/core/testing';

describe('traim-autocomplete', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-autocomplete></traim-autocomplete>');

    const element = await page.find('traim-autocomplete');
    expect(element).toHaveClass('hydrated');
  });
});
