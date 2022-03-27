import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';

class VistaPersonalizarListasVisibles extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Personalizar listas visibles</h1>
 <vaadin-text-field label="Buscador de listas" placeholder="Introduzca lista" style="align-self: center;"></vaadin-text-field>
 <vaadin-horizontal-layout theme="spacing-xl" style="align-self: center; width: 100%; justify-content: center; padding: var(--lumo-space-m);">
  <vaadin-button theme="icon" aria-label="Add new">
   <iron-icon icon="lumo:eye"></iron-icon>
  </vaadin-button>
  <vaadin-button theme="icon" aria-label="Add new">
   <iron-icon icon="lumo:eye-disabled"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-button style="align-self: flex-end;">
  Cerrar
 </vaadin-button>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-personalizar-listas-visibles';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPersonalizarListasVisibles.is, VistaPersonalizarListasVisibles);
