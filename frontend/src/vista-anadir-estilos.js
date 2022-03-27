import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-checkbox/src/vaadin-checkbox.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaAnadirEstilos extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Añadir estilo</h1>
 <vaadin-text-field label="Estilo" placeholder="Introduzca nombre del estilo" style="width: 100%;"></vaadin-text-field>
 <h3>Añadir similitudes</h3>
 <vaadin-horizontal-layout style="width: 100%; align-self: center; justify-content: space-around; margin: var(--lumo-space-s);">
  <vaadin-checkbox>
   Estilo 1
  </vaadin-checkbox>
  <vaadin-checkbox>
   Estilo 2
  </vaadin-checkbox>
  <vaadin-checkbox>
   Estilo 3
  </vaadin-checkbox>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout style="width: 100%; align-self: center; justify-content: space-around; margin: var(--lumo-space-s);">
  <vaadin-checkbox>
   Estilo 4
  </vaadin-checkbox>
  <vaadin-checkbox>
   Estilo 5
  </vaadin-checkbox>
  <vaadin-checkbox>
   Estilo 6
  </vaadin-checkbox>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout style="width: 100%; justify-content: space-evenly;">
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
        return 'vista-anadir-estilos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirEstilos.is, VistaAnadirEstilos);
