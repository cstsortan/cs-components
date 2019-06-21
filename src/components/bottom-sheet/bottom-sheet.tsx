import { Component, h } from '@stencil/core';

@Component({
    tag: 'bottom-sheet',
    styleUrl: 'bottom-sheet.css',
    shadow: true,
})
export class BottomSheet {

    render() {
        return (
            <div>
                <p>Hello BottomSheet!!</p>
            </div>
        );
    }
}
