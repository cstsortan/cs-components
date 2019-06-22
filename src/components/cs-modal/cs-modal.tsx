import { Component, h, State, Method, Prop } from '@stencil/core';


@Component({
    tag: 'cs-modal',
    styleUrl: 'cs-modal.scss'
})
export class CsModal {
    @State()
    @Prop()
    open: boolean = false;

    @Method()
    async closeModal() {
        this.open = false;
    }

    @Method()
    async openModal() {
        this.open = true;
    }

    render() {
        return (
        <div id="myModal" class={'modal ' + (this.open ? 'd-block' : ' d-none')}>
            <div class="modal-content">
                <div class="modal-header">
                    <div class="header-content">
                        <slot name="header"></slot>
                    </div>
                    <div class="btn-close" onClick={() => this.closeModal()}>&times;</div>
                </div>
                <slot></slot>
            </div>
      </div>);
    }
}
