import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';


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
    }

    @Prop()
    open: boolean = true;
    
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
