import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-avatar/src/vaadin-avatar.js';

class VistaCabeceraAdministrador extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: flex-end;">
 <img style="align-self: center;" src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfKzrPE9WET0QiR1TN9Nmkd+AdkkCUsh...tq9et+dERBpAQGghILesY7iix7UJZE0kU7tmLSfMhOWg==.PNG">
 <vaadin-vertical-layout style="align-self: center; width: 100%;">
  <vaadin-horizontal-layout theme="spacing" style="justify-content: flex-end; width: 100%;">
   <vaadin-button style="align-self: center;">
    Cerrar sesión
   </vaadin-button>
   <vaadin-avatar style="align-self: center;"></vaadin-avatar>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-cabecera-administrador';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCabeceraAdministrador.is, VistaCabeceraAdministrador);
