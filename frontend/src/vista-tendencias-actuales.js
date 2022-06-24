import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-elementos-visuales-comunes.js';

class VistaTendenciasActuales extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout theme="spacing" id="vaadinVerticalLayout" style="width: 100%; height: 100%;">
 <label id="label" style="align-self: center; flex-shrink: 0;">Explora las tendencias actuales que hay entre los usuarios:</label>
 <vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-around;" id="vaadinHorizontalLayout">
  <vista-elementos-visuales-comunes id="vistaElementosVisualesComunes"></vista-elementos-visuales-comunes>
  <vista-elementos-visuales-comunes id="vistaElementosVisualesComunes1"></vista-elementos-visuales-comunes>
  <vista-elementos-visuales-comunes id="vistaElementosVisualesComunes2"></vista-elementos-visuales-comunes>
  <vista-elementos-visuales-comunes id="vistaElementosVisualesComunes3"></vista-elementos-visuales-comunes>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-tendencias-actuales';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaTendenciasActuales.is, VistaTendenciasActuales);
