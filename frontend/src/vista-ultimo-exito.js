import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaUltimoExito extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <img style="align-self: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKV7T0q0dpHo9-B2lGWlaGDSIpqdkJ6CnhnQ&amp;usqp=CAU">
 <vaadin-button style="align-self: center; flex-grow: 0;">
   Reproducir (►) 
 </vaadin-button>
 <label>Canción</label>
 <label>Autor</label>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-ultimo-exito';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaUltimoExito.is, VistaUltimoExito);
