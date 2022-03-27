import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaMostrarCreditos extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Créditos</h1>
 <label style="align-self: flex-start; margin: var(--lumo-space-m);">Título: titulo1</label>
 <label style="align-self: flex-start; margin: var(--lumo-space-m);">Álbum: album1</label>
 <label style="align-self: flex-start; margin: var(--lumo-space-m);">Compositor: compositor1</label>
 <label style="align-self: flex-start; margin: var(--lumo-space-m);">Productor: productor1</label>
 <label style="align-self: flex-start; margin: var(--lumo-space-m);">Intérprete: interprete1</label>
 <vaadin-button style="align-self: center;">
  Cerrar
 </vaadin-button>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-mostrar-creditos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaMostrarCreditos.is, VistaMostrarCreditos);
