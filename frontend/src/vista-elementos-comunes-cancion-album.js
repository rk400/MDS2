import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-elementos-comunes-cancion-album`
 *
 * VistaElementosComunesCancionAlbum element.
 *
 * @customElement
 * @polymer
 */
class VistaElementosComunesCancionAlbum extends PolymerElement {

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
        return 'vista-elementos-comunes-cancion-album';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElementosComunesCancionAlbum.is, VistaElementosComunesCancionAlbum);
