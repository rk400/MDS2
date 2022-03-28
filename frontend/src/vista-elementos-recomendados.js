import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-elemento.js';

class VistaElementosRecomendados extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%;">
 <vista-elemento></vista-elemento>
 <vista-elemento></vista-elemento>
 <vista-elemento></vista-elemento>
 <vista-elemento></vista-elemento>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-elementos-recomendados';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElementosRecomendados.is, VistaElementosRecomendados);
