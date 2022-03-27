import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';

class VistaSeleccionarArtista extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Elegir artista para canción:</h1>
 <vaadin-horizontal-layout style="align-self: center;">
  <vaadin-combo-box style="align-self: center;" placeholder="Elegir artista/s"></vaadin-combo-box>
  <vaadin-button theme="icon" aria-label="Add new">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout style="justify-content: space-evenly; align-self: center; width: 100%; padding: var(--lumo-space-m);">
  <vaadin-button>
   Cancelar
  </vaadin-button>
  <vaadin-button>
   Añadir
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-seleccionar-artista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSeleccionarArtista.is, VistaSeleccionarArtista);
