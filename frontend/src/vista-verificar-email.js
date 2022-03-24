import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaVerificarEmail extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Verificar e-mail</h1>
 <label>Confirme que example@example.com es su email con el código que le acabamos de enviar a su correo.</label>
 <vaadin-text-field label="" placeholder="Introduzca código" style="align-self: center;" required></vaadin-text-field>
 <vaadin-button style="align-self: center;">
  Confirmar
 </vaadin-button>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-verificar-email';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaVerificarEmail.is, VistaVerificarEmail);
