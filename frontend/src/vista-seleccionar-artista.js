import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-seleccionar-artista`
 *
 * VistaSeleccionarArtista element.
 *
 * @customElement
 * @polymer
 */
class VistaSeleccionarArtista extends PolymerElement {

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
        return 'vista-seleccionar-artista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSeleccionarArtista.is, VistaSeleccionarArtista);