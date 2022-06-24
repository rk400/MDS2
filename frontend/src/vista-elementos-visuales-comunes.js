import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaElementosVisualesComunes extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;" id="vaadinVerticalLayout">
 <img id="img" style="align-self: center;" src="https://imgur.com/JWBvXwk.png">
 <vaadin-button id="vaadinButton" style="align-self: center;">
  Reproducir (►)
 </vaadin-button>
 <label id="label">Canción</label>
 <label id="label1">Autor</label>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-elementos-visuales-comunes';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElementosVisualesComunes.is, VistaElementosVisualesComunes);
