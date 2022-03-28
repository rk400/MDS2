import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-date-picker/src/vaadin-date-picker.js';

class VistaAnadirAlbumes extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; padding-left: var(--lumo-space-s); padding-right: var(--lumo-space-s); padding-bottom: var(--lumo-space-s);">
 <h1>Añadir álbum</h1>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; height: 100%; align-self: center; justify-content: flex-start;">
  <label style="align-self: center;">Seleccionar canciones:</label>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">1. cancion01</label>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:cross"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">2. cancion02</label>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:cross"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">3. cancion03</label>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:cross"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">Artista/s:</label>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-date-picker label="Fecha edición:" placeholder="Elige la fecha de edición" style="width: 100%;">
  Fecha edición:
 </vaadin-date-picker>
 <vaadin-horizontal-layout style="width: 100%; justify-content: space-around; padding: var(--lumo-space-s); margin-top: var(--lumo-space-m);">
  <vaadin-button>
    Cancelar 
  </vaadin-button>
  <vaadin-button>
   Eliminar
  </vaadin-button>
  <vaadin-button>
    Añadir 
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-anadir-albumes';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirAlbumes.is, VistaAnadirAlbumes);
