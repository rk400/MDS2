import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './vista-artista.js';

class VistaArtistaSimilar extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vista-artista></vista-artista>
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
