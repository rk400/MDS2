import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaAnadirElementos extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Añadir elementos</h1>
 <vaadin-horizontal-layout style="width: 100%; justify-content: space-around;">
  <vaadin-vertical-layout theme="spacing">
   <img style="align-self: center;" src="https://imgur.com/A8MDhJ3.png">
   <vaadin-button style="align-self: center;">
    Estilos
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing">
   <img style="align-self: center;" src="https://imgur.com/EWxHKRQ.png">
   <vaadin-button style="align-self: center;">
    Canciones
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing">
   <img style="align-self: center;" src="https://imgur.com/0fnQgYk.png">
   <vaadin-button style="align-self: center;">
    Álbumes
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing">
   <img style="align-self: center;" src="https://imgur.com/GhDrIpq.png">
   <vaadin-button style="align-self: center;">
    Artistas
   </vaadin-button>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <vaadin-button style="align-self: center; margin: var(--lumo-space-l);">
  Salir
 </vaadin-button>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-anadir-elementos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirElementos.is, VistaAnadirElementos);
