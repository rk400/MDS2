import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaAlbum extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <img style="align-self: center;" src="https://imgur.com/JWBvXwk.png">
 <vaadin-button style="align-self: center;">
  Reproducir
 </vaadin-button>
 <label>Álbum</label>
 <label>Artista</label>
</vaadin-vertical-layout>
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
