import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artista-similar`
 *
 * VistaArtistaSimilar element.
 *
 * @customElement
 * @polymer
 */
class VistaArtistaSimilar extends PolymerElement {

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
        return 'vista-artista-similar';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtistaSimilar.is, VistaArtistaSimilar);
