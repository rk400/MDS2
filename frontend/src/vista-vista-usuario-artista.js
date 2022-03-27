import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaVistaUsuarioArtista extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Vista de usuario/artista</h1>
 <label style="padding: var(--lumo-space-m);">¿Desea hacer una comprobación de la web como rol de usuario o artista? Se abrirá una ventana nueva como si hubiera iniciado sesión.</label>
 <vaadin-horizontal-layout style="width: 100%; justify-content: space-around;">
  <vaadin-button>
   Usuario
  </vaadin-button>
  <vaadin-button>
   Artista
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-vista-usuario-artista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaVistaUsuarioArtista.is, VistaVistaUsuarioArtista);
