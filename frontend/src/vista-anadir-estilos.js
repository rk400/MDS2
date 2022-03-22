import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-anadir-estilos`
 *
 * VistaAnadirEstilos element.
 *
 * @customElement
 * @polymer
 */
class VistaAnadirEstilos extends PolymerElement {

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
        return 'vista-anadir-estilos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirEstilos.is, VistaAnadirEstilos);
