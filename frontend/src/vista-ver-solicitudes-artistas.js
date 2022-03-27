import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import './vista-solicitudes.js';

class VistaVerSolicitudesArtistas extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; justify-content: flex-start;">
 <h1>Solicitudes de artistas</h1>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
  <h3 style="margin: var(--lumo-space-m);">Artistas</h3>
  <h3 style="margin: var(--lumo-space-m);">Mensaje de petición</h3>
 </vaadin-horizontal-layout>
 <vista-solicitudes style="width: 100%;"></vista-solicitudes>
 <vaadin-button style="align-self: center;">
  Confirmar
 </vaadin-button>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-ver-solicitudes-artistas';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaVerSolicitudesArtistas.is, VistaVerSolicitudesArtistas);
