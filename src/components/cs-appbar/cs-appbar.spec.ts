import { TestWindow } from '@stencil/core/testing';
import { CsAppbar } from './cs-appbar';

describe('cs-appbar', () => {
  it('should build', () => {
    expect(new CsAppbar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCsAppbarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CsAppbar],
        html: '<cs-appbar></cs-appbar>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
