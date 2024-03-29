/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CsAppbar {}
  interface CsModal {
    'closeModal': () => Promise<void>;
    'open': boolean;
    'openModal': () => Promise<void>;
  }
  interface SideDrawer {
    'closeDrawer': () => Promise<void>;
    'openDrawer': () => Promise<void>;
  }
}

declare global {


  interface HTMLCsAppbarElement extends Components.CsAppbar, HTMLStencilElement {}
  var HTMLCsAppbarElement: {
    prototype: HTMLCsAppbarElement;
    new (): HTMLCsAppbarElement;
  };

  interface HTMLCsModalElement extends Components.CsModal, HTMLStencilElement {}
  var HTMLCsModalElement: {
    prototype: HTMLCsModalElement;
    new (): HTMLCsModalElement;
  };

  interface HTMLSideDrawerElement extends Components.SideDrawer, HTMLStencilElement {}
  var HTMLSideDrawerElement: {
    prototype: HTMLSideDrawerElement;
    new (): HTMLSideDrawerElement;
  };
  interface HTMLElementTagNameMap {
    'cs-appbar': HTMLCsAppbarElement;
    'cs-modal': HTMLCsModalElement;
    'side-drawer': HTMLSideDrawerElement;
  }
}

declare namespace LocalJSX {
  interface CsAppbar extends JSXBase.HTMLAttributes<HTMLCsAppbarElement> {}
  interface CsModal extends JSXBase.HTMLAttributes<HTMLCsModalElement> {
    'open'?: boolean;
  }
  interface SideDrawer extends JSXBase.HTMLAttributes<HTMLSideDrawerElement> {
    'onDrawerClosed'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'cs-appbar': CsAppbar;
    'cs-modal': CsModal;
    'side-drawer': SideDrawer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


