import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artista-similar-anadir`
 *
 * VistaArtistaSimilarAnadir element.
 *
 * @customElement
 * @polymer
 */
class VistaArtistaSimilarAnadir extends PolymerElement {

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
        return 'vista-artista-similar-anadir';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtistaSimilarAnadir.is, VistaArtistaSimilarAnadir);
