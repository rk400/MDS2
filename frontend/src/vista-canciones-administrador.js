import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-cancion-administrador.js';

class VistaCancionesAdministrador extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-around;">
 <vista-cancion-administrador></vista-cancion-administrador>
 <vista-cancion-administrador></vista-cancion-administrador>
 <vista-cancion-administrador></vista-cancion-administrador>
 <vista-cancion-administrador></vista-cancion-administrador>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-canciones-administrador';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionesAdministrador.is, VistaCancionesAdministrador);
