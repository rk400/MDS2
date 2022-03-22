import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-compartir-album`
 *
 * VistaCompartirAlbum element.
 *
 * @customElement
 * @polymer
 */
class VistaCompartirAlbum extends PolymerElement {

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
        return 'vista-compartir-album';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCompartirAlbum.is, VistaCompartirAlbum);
