import { Component, h } from '@stencil/core';


@Component({
    tag: 'cs-appbar',
    styleUrl: 'cs-appbar.scss',
    shadow: true,
})
export class CsAppbar {
    
    render() {
        return (
            <div class="app-bar-style sticky">
                <div class="start">
                    <slot name="start"></slot>
                </div>
                <div class="app-bar-title">
                    <slot></slot>
                </div>
                <div class="end">
                    <slot name="end"></slot>
                </div>
            </div>
        );
    }
}
