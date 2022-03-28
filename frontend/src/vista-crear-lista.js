import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaCrearLista extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; align-items: flex-start;">
 <h1 style="align-self: flex-start;">Crear lista</h1>
 <vaadin-text-field label="Titulo:" placeholder="Introduzca titulo para lista" style="margin: var(--lumo-space-xs); width: 100%; align-self: center;"></vaadin-text-field>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; height: 100%; align-self: center; justify-content: center;">
  <vaadin-combo-box style="align-self: center;" placeholder="Seleccionar canción"></vaadin-combo-box>
  <vaadin-button style="align-self: center;">
   Añadir 
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-button style="align-self: flex-end;">
  Crear lista
 </vaadin-button>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-crear-lista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCrearLista.is, VistaCrearLista);
