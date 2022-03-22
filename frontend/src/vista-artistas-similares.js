import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artistas-similares`
 *
 * VistaArtistasSimilares element.
 *
 * @customElement
 * @polymer
 */
class VistaArtistasSimilares extends PolymerElement {

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
        return 'vista-artistas-similares';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtistasSimilares.is, VistaArtistasSimilares);
