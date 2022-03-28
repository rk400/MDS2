import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaSeleccionarAlbum extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Incluir canción en álbum:</h1>
 <vaadin-text-field label="Álbum" placeholder="" style="align-self: center;"></vaadin-text-field>
 <vaadin-horizontal-layout style="width: 100%; justify-content: space-evenly; padding: var(--lumo-space-s);">
  <vaadin-button>
   Cancelar
  </vaadin-button>
  <vaadin-button>
   Aceptar 
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-seleccionar-album';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSeleccionarAlbum.is, VistaSeleccionarAlbum);
