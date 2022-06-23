import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';

class VistaBusqueda extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; height: 100%;">
  <h2>Resultado principal
   <vaadin-vertical-layout theme="spacing"></vaadin-vertical-layout>
   <vaadin-grid></vaadin-grid></h2>
  <h2>Artistas relacionados
   <vaadin-vertical-layout theme="spacing"></vaadin-vertical-layout>
   <vaadin-grid></vaadin-grid></h2>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <h3>Listas relacionadas</h3>
  <vaadin-button theme="icon" aria-label="Add new">
   <iron-icon icon="lumo:angle-left"></iron-icon>
  </vaadin-button>
  <vaadin-button theme="icon" aria-label="Add new">
   <iron-icon icon="lumo:angle-right" color=""></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-grid></vaadin-grid>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-busqueda';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaBusqueda.is, VistaBusqueda);
