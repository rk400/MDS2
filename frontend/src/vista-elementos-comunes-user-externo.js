import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-elementos-comunes-user-externo`
 *
 * VistaElementosComunesUserExterno element.
 *
 * @customElement
 * @polymer
 */
class VistaElementosComunesUserExterno extends PolymerElement {

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
        return 'vista-elementos-comunes-user-externo';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElementosComunesUserExterno.is, VistaElementosComunesUserExterno);
