import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-seleccionar-canciones`
 *
 * VistaSeleccionarCanciones element.
 *
 * @customElement
 * @polymer
 */
class VistaSeleccionarCanciones extends PolymerElement {

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
        return 'vista-seleccionar-canciones';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSeleccionarCanciones.is, VistaSeleccionarCanciones);
