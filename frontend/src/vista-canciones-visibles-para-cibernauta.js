import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-cancion-visible.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';

class VistaCancionesVisiblesParaCibernauta extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1 style="align-self: center;">Canciones visibles para cibernauta</h1>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;">
  <vista-cancion-visible style="align-self: center;"></vista-cancion-visible>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:cross"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;">
  <vista-cancion-visible style="align-self: center;"></vista-cancion-visible>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:cross"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;">
  <vista-cancion-visible style="align-self: center;"></vista-cancion-visible>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:cross"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;">
  <vista-cancion-visible style="align-self: center;"></vista-cancion-visible>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:cross"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;">
  <vaadin-text-field label="Añadir canción" placeholder="Introduzca canción" style="align-self: center;"></vaadin-text-field>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: flex-end;">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-canciones-visibles-para-cibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionesVisiblesParaCibernauta.is, VistaCancionesVisiblesParaCibernauta);
