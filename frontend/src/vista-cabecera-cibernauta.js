import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
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
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-between;">
 <img style="align-self: center; flex-grow: 0; flex-shrink: 0;" src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfKzrPE9WET0QiR1TN9Nmkd+AdkkCUsh...tq9et+dERBpAQGghILesY7iix7UJZE0kU7tmLSfMhOWg==.PNG">
 <img style="width: 60%;" src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1113/img/vga/boom/07.png">
 <vaadin-button style="align-self: center;">
   Registrarse 
 </vaadin-button>
 <vaadin-button style="align-self: center;">
   Iniciar sesión 
 </vaadin-button>
</vaadin-horizontal-layout>
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
