import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-elemento`
 *
 * VistaElemento element.
 *
 * @customElement
 * @polymer
 */
class VistaElemento extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
        `;
    }

    static get is() {
        return 'vista-elemento';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElemento.is, VistaElemento);
