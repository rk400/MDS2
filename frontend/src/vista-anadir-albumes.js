import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-anadir-albumes`
 *
 * VistaAnadirAlbumes element.
 *
 * @customElement
 * @polymer
 */
class VistaAnadirAlbumes extends PolymerElement {

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
        return 'vista-anadir-albumes';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirAlbumes.is, VistaAnadirAlbumes);
