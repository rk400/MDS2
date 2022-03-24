import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaEstablecerNuevaContrasena extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Cambiar contraseña</h1>
 <vaadin-horizontal-layout style="width: 100%; height: 100%;">
  <vaadin-text-field label="Nueva contraseña:" placeholder="Introduzca nueva contraseña" style="width: 100%;"></vaadin-text-field>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout style="width: 100%; height: 100%;">
  <vaadin-text-field label="Confirmar contraseña:" placeholder="Introduzca otra vez contraseña" style="width: 100%;"></vaadin-text-field>
 </vaadin-horizontal-layout>
 <vaadin-button style="align-self: center;">
  Aceptar
 </vaadin-button>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-establecer-nueva-contrasena';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaEstablecerNuevaContrasena.is, VistaEstablecerNuevaContrasena);
