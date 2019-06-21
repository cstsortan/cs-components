import { TestWindow } from '@stencil/core/testing';
import { SideDrawer } from './side-drawer';

describe('side-drawer', () => {
  it('should build', () => {
    expect(new SideDrawer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSideDrawerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SideDrawer],
        html: '<side-drawer></side-drawer>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
