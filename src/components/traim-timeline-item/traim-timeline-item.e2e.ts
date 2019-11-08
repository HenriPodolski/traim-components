import { newE2EPage } from '@stencil/core/testing';

describe('traim-timeline-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traim-timeline-item></traim-timeline-item>');

    const element = await page.find('traim-timeline-item');
    expect(element).toHaveClass('hydrated');
  });
});
