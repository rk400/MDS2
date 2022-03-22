import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-anadir-canciones`
 *
 * VistaAnadirCanciones element.
 *
 * @customElement
 * @polymer
 */
class VistaAnadirCanciones extends PolymerElement {

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
        return 'vista-anadir-canciones';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirCanciones.is, VistaAnadirCanciones);
