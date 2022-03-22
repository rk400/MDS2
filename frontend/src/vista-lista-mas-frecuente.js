import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-lista-mas-frecuente`
 *
 * VistaListaMasFrecuente element.
 *
 * @customElement
 * @polymer
 */
class VistaListaMasFrecuente extends PolymerElement {

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
        return 'vista-lista-mas-frecuente';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListaMasFrecuente.is, VistaListaMasFrecuente);
