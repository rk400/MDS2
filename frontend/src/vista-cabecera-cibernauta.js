import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaCabeceraCibernauta extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout id="mainLayout" style="width: 100%; height: 100%;">
 <vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: flex-end; padding-right: var(--lumo-space-s);" id="vaadinHorizontalLayout">
  <img style="align-self: center; flex-grow: 0; flex-shrink: 0; margin-left: var(--lumo-space-s);" src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfKzrPE9WET0QiR1TN9Nmkd+AdkkCUsh...tq9et+dERBpAQGghILesY7iix7UJZE0kU7tmLSfMhOWg==.PNG" id="img">
  <vaadin-vertical-layout theme="spacing" style="align-self: center; width: 100%; flex-direction: row;" id="vaadinVerticalLayout">
   <vaadin-horizontal-layout theme="spacing" style="align-self: center; width: 100%; justify-content: flex-end;" id="vaadinHorizontalLayout1">
    <vaadin-button style="align-self: center;" id="vaadinButton">
      Registrarse 
    </vaadin-button>
    <vaadin-button style="align-self: center;" id="vaadinButton1">
      Iniciar sesión 
    </vaadin-button>
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-cabecera-cibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCabeceraCibernauta.is, VistaCabeceraCibernauta);
