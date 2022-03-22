import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-album`
 *
 * VistaAlbum element.
 *
 * @customElement
 * @polymer
 */
class VistaAlbum extends PolymerElement {

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
        return 'vista-album';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAlbum.is, VistaAlbum);
