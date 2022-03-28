import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-estilo.js';

class VistaEstilosMasFrecuentes extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%;">
 <vista-estilo></vista-estilo>
 <vista-estilo></vista-estilo>
 <vista-estilo></vista-estilo>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-estilos-mas-frecuentes';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaEstilosMasFrecuentes.is, VistaEstilosMasFrecuentes);
