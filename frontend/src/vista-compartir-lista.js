import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';

class VistaCompartirLista extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Compartir</h1>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
  <img src="https://imgur.com/JWBvXwk.png">
  <vaadin-vertical-layout theme="spacing" style="width: 100%;">
   <vaadin-button theme="icon" aria-label="Add new">
    <iron-icon icon="lumo:play"></iron-icon>
   </vaadin-button>
   <label>Lista</label>
   <label>Creador</label>
   <vaadin-horizontal-layout theme="spacing" style="width: 100%; align-self: stretch;">
    <label style="align-self: center;">0:00</label>
    <vaadin-progress-bar style="flex-grow: 0; align-self: center;"></vaadin-progress-bar>
    <label style="align-self: center;">0:00</label>
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
  <vaadin-text-field style="width: 100%;"></vaadin-text-field>
  <vaadin-button style="width: 20%;">
    Copiar 
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-compartir-lista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCompartirLista.is, VistaCompartirLista);
