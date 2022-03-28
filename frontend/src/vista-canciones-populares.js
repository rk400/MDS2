import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-cancion-popular.js';

class VistaCancionesPopulares extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-around;">
 <vista-cancion-popular></vista-cancion-popular>
 <vista-cancion-popular></vista-cancion-popular>
 <vista-cancion-popular></vista-cancion-popular>
 <vista-cancion-popular></vista-cancion-popular>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-canciones-populares';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionesPopulares.is, VistaCancionesPopulares);
