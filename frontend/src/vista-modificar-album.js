import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-modificar-album`
 *
 * VistaModificarAlbum element.
 *
 * @customElement
 * @polymer
 */
class VistaModificarAlbum extends PolymerElement {

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
        return 'vista-modificar-album';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaModificarAlbum.is, VistaModificarAlbum);
