import { Component, h, EventEmitter, Event, State, Method } from '@stencil/core';


@Component({
    tag: 'side-drawer',
    styleUrl: 'side-drawer.css',
    shadow: true
})
export class SideDrawer {

    @Event()
    drawerClosed: EventEmitter;

    onBackdropClicked = () => {
        this.open = false;
        this.drawerClosed.emit();
    }

    @State()
    open: boolean = false;

    @Method()
    async openDrawer() {
        this.open = true;
    }

    @Method()
    async closeDrawer() {
        this.open = false;
    }
    
    render() {
        return ([
            <div class={'sidenav ' + (this.open ? 'open' : '')}>
                <slot></slot>
            </div>,
            <div onClick={this.onBackdropClicked} class={this.open ? 'backdrop' : ''}>
                
            </div>
        ]);
    }
}
