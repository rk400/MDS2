import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import './vista-estilo-similar.js';

class VistaEstilosSimilares extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vista-estilo-similar></vista-estilo-similar>
 <vista-estilo-similar></vista-estilo-similar>
 <vista-estilo-similar></vista-estilo-similar>
 <vista-estilo-similar></vista-estilo-similar>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-estilos-similares';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaEstilosSimilares.is, VistaEstilosSimilares);
