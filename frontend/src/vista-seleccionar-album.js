import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-seleccionar-album`
 *
 * VistaSeleccionarAlbum element.
 *
 * @customElement
 * @polymer
 */
class VistaSeleccionarAlbum extends PolymerElement {

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
        return 'vista-seleccionar-album';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSeleccionarAlbum.is, VistaSeleccionarAlbum);
