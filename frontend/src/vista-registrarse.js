import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaRegistrarse extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <img style="align-self: center;" src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfKzrPE9WET0QiR1TN9Nmkd+AdkkCUsh...tq9et+dERBpAQGghILesY7iix7UJZE0kU7tmLSfMhOWg==.PNG">
 <label style="align-self: center;">Conectar directamente con:</label>
 <vaadin-horizontal-layout theme="spacing" style="align-self: center; justify-content: center;">
  <vaadin-vertical-layout theme="spacing" style="align-self: center;">
   <img style="width: 50%; align-self: center;" src="https://imgur.com/F03QX4E.png">
   <vaadin-button style="align-self: center;">
    Apple 
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing" style="align-self: center;">
   <img style="width: 50%; align-self: center;" src="https://imgur.com/hrZVzM8.png">
   <vaadin-button style="align-self: center;">
    Facebook
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing" style="align-self: center;">
   <img style="width: 50%; align-self: center;" src="https://imgur.com/EEEpzal.png">
   <vaadin-button style="align-self: center;">
    Google
   </vaadin-button>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <label style="align-self: center;">_____________________________________________________</label>
 <vaadin-horizontal-layout theme="spacing" style="align-self: center; justify-content: center;">
  <vaadin-vertical-layout theme="spacing" style="align-self: center; align-items: flex-start; flex-direction: column;">
   <h5 style="align-self: center; flex-grow: 0; flex-shrink: 0;">Foto de perfil:</h5>
   <img style="flex-grow: 0; width: 40%; align-self: center; margin: var(--lumo-space-xs);" src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png">
   <vaadin-button style="align-self: center;">
    Subir foto
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing" style="align-self: center;">
   <vaadin-text-field label="Email:" placeholder="Introduzca email" required></vaadin-text-field>
   <vaadin-text-field label="Usuario/Nick:" placeholder="Introduzca nick" required></vaadin-text-field>
   <vaadin-text-field label="Contraseña:" placeholder="Introduzca contraseña" required></vaadin-text-field>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <vaadin-button style="align-self: center; margin: var(--lumo-space-m);">
  Registrarse
 </vaadin-button>
 <vaadin-horizontal-layout theme="spacing" style="align-self: center;">
  <label style="align-self: center;">¿Ya tienes cuenta?</label>
  <a href="" style="align-self: center;">Inicia sesión</a>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-registrarse';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaRegistrarse.is, VistaRegistrarse);
