import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-elementos-comunes-propietario`
 *
 * VistaElementosComunesPropietario element.
 *
 * @customElement
 * @polymer
 */
class VistaElementosComunesPropietario extends PolymerElement {

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
        return 'vista-elementos-comunes-propietario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElementosComunesPropietario.is, VistaElementosComunesPropietario);
