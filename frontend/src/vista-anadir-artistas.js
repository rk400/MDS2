import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-checkbox/src/vaadin-checkbox.js';

class VistaAnadirArtistas extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; padding-right: var(--lumo-space-s); padding-bottom: var(--lumo-space-s); padding-left: var(--lumo-space-s);">
 <h1>Añadir artista</h1>
 <vaadin-text-field label="Artista:" placeholder="Introzuca artista" style="width: 100%;"></vaadin-text-field>
 <vaadin-text-field label="Email:" placeholder="Introducir e-mail" style="width: 100%;"></vaadin-text-field>
 <vaadin-text-field label="Nick:" placeholder="Introduzca nombre de usuario" style="width: 100%;"></vaadin-text-field>
 <h3>Añadir similitudes</h3>
 <vaadin-horizontal-layout style="width: 100%; justify-content: space-around;">
  <vaadin-checkbox>
   Artista
  </vaadin-checkbox>
  <vaadin-checkbox>
   Artista
  </vaadin-checkbox>
  <vaadin-checkbox>
   Artista
  </vaadin-checkbox>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout style="width: 100%; justify-content: space-around;">
  <vaadin-checkbox>
   Artista
  </vaadin-checkbox>
  <vaadin-checkbox>
   Artista
  </vaadin-checkbox>
  <vaadin-checkbox>
   Artista
  </vaadin-checkbox>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout style="width: 100%; justify-content: space-around; padding-bottom: var(--lumo-space-s); height: 100%; align-items: flex-end;">
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
        return 'vista-anadir-artistas';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirArtistas.is, VistaAnadirArtistas);
