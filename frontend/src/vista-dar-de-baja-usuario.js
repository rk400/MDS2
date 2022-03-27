import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaDarDeBajaUsuario extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1 style="align-self: flex-start;">Dar de baja a usuario</h1>
 <vaadin-text-field label="Usuario:" placeholder="Nombre de usuario" style="align-self: center; width: 70%;"></vaadin-text-field>
 <vaadin-text-area label="Motivos:" placeholder="Añade una descripción del motivo de la baja" style="align-self: center; width: 70%;"></vaadin-text-area>
 <vaadin-horizontal-layout style="width: 100%; align-self: flex-start; justify-content: space-around; padding: var(--lumo-space-m);">
  <vaadin-button>
   Cancelar
  </vaadin-button>
  <vaadin-button>
   Aceptar
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-dar-de-baja-usuario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaDarDeBajaUsuario.is, VistaDarDeBajaUsuario);
