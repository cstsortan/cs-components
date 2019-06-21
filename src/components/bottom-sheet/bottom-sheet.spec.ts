import { TestWindow } from '@stencil/core/testing';
import { BottomSheet } from './bottom-sheet';

describe('bottom-sheet', () => {
  it('should build', () => {
    expect(new BottomSheet()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLBottomSheetElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BottomSheet],
        html: '<bottom-sheet></bottom-sheet>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
