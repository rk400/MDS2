import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-album.js';

class VistaAlbumes extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-around;">
 <vista-album></vista-album>
 <vista-album></vista-album>
 <vista-album></vista-album>
 <vista-album></vista-album>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-albumes';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAlbumes.is, VistaAlbumes);
