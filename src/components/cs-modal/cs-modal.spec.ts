import { TestWindow } from '@stencil/core/testing';
import { CsModal } from './cs-modal';

describe('cs-modal', () => {
  it('should build', () => {
    expect(new CsModal()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCsModalElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CsModal],
        html: '<cs-modal></cs-modal>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
