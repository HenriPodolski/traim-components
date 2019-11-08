import { newE2EPage } from '@stencil/core/testing';

describe('traim-accordion-pane', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-accordion-pane></traim-accordion-pane>');

    const element = await page.find('traim-accordion-pane');
    expect(element).toHaveClass('hydrated');
  });
});
