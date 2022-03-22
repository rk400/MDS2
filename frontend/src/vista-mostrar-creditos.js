import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-mostrar-creditos`
 *
 * VistaMostrarCreditos element.
 *
 * @customElement
 * @polymer
 */
class VistaMostrarCreditos extends PolymerElement {

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
        return 'vista-mostrar-creditos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaMostrarCreditos.is, VistaMostrarCreditos);
