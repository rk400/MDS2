import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';

class VistaPerfilUsuarioUExterno extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;"></vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-perfil-usuario-u-externo';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPerfilUsuarioUExterno.is, VistaPerfilUsuarioUExterno);
