import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-modificar-estilos`
 *
 * VistaModificarEstilos element.
 *
 * @customElement
 * @polymer
 */
class VistaModificarEstilos extends PolymerElement {

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
        return 'vista-modificar-estilos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaModificarEstilos.is, VistaModificarEstilos);
