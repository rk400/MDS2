import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';

class VistaElemento extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%;">
 <img src="https://imgur.com/JWBvXwk.png">
 <vaadin-vertical-layout theme="spacing" style="width: 100%; height: 100%; align-self: center; justify-content: flex-end;">
  <label style="align-self: flex-end; flex-grow: 1;">(x/1000)</label>
  <label style="align-self: flex-start;">Elemento</label>
  <label>Creador</label>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: flex-end;">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </vaadin-vertical-layout>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-elemento';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElemento.is, VistaElemento);
