import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-checkbox/src/vaadin-checkbox.js';

class VistaIniciarSesion extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;" id="vaadinVerticalLayout">
 <img style="align-self: center;" src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfKzrPE9WET0QiR1TN9Nmkd+AdkkCUsh...tq9et+dERBpAQGghILesY7iix7UJZE0kU7tmLSfMhOWg==.PNG" id="img">
 <label style="align-self: center;" id="label">Conectar ditecramente con:</label>
 <vaadin-horizontal-layout style="align-self: center;" id="vaadinHorizontalLayout">
  <vaadin-vertical-layout style="align-self: center; margin: var(--lumo-space-xs);" id="vaadinVerticalLayout1">
   <img style="flex-shrink: 1; align-self: center; width: 50%;" src="https://imgur.com/F03QX4E.png" id="img1">
   <vaadin-button style="align-self: center;" id="vaadinButton">
     Apple 
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout style="align-self: center; margin: var(--lumo-space-xs);" id="vaadinVerticalLayout2">
   <img style="flex-grow: 0; flex-shrink: 4; width: 50%; align-self: center;" src="https://imgur.com/hrZVzM8.png" id="img2">
   <vaadin-button style="align-self: center;" id="vaadinButton1">
     Facebook 
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout style="align-self: center; margin: var(--lumo-space-xs);" id="vaadinVerticalLayout3">
   <img style="flex-shrink: 0; width: 50%; align-self: center;" src="https://imgur.com/EEEpzal.png" id="img3">
   <vaadin-button style="align-self: center;" id="vaadinButton2">
     Google 
   </vaadin-button>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <label style="align-self: center;" id="label1">_____________________________________________________</label>
 <vaadin-text-field label="Email/Usuario:" placeholder="Introduzca email o usuario" style="align-self: center; width: 30%;" id="Email_Usuario"></vaadin-text-field>
 <vaadin-text-field label="Contraseña:" placeholder="Introduzca contraseña" style="align-self: center; width: 30%;" id="contraseña"></vaadin-text-field>
 <a href="" style="align-self: center; flex-grow: 0; flex-shrink: 1;" id="a">¿Se ha olvidado de la contraseña?</a>
 <vaadin-checkbox style="align-self: center;" checked id="vaadinCheckbox">
   Recordar 
 </vaadin-checkbox>
 <vaadin-button style="align-self: center;" id="vaadinButton3">
   Iniciar sesión 
 </vaadin-button>
 <vaadin-horizontal-layout theme="spacing" style="align-self: center;" id="vaadinHorizontalLayout1">
  <label style="align-self: center;" id="label2">¿No tienes cuenta?</label>
  <a href="https://vaadin.com" id="a1">Registrate </a>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-iniciar-sesion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaIniciarSesion.is, VistaIniciarSesion);
