import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-estilos-mas-frecuentes`
 *
 * VistaEstilosMasFrecuentes element.
 *
 * @customElement
 * @polymer
 */
class VistaEstilosMasFrecuentes extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
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
