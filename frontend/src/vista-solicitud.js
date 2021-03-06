import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-checkbox/src/vaadin-checkbox.js';
import '@polymer/iron-icon/iron-icon.js';

class VistaSolicitud extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: flex-start;">
 <label style="width: 100%; margin: var(--lumo-space-m);">Artista</label>
 <label style="width: 100%; margin: var(--lumo-space-m);">Mensaje</label>
 <vaadin-checkbox style="margin: var(--lumo-space-m);">
  <iron-icon icon="lumo:cross" style="vertical-align: top;"></iron-icon>
 </vaadin-checkbox>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-solicitud';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSolicitud.is, VistaSolicitud);
