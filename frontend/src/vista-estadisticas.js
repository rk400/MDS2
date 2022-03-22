import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-estadisticas`
 *
 * VistaEstadisticas element.
 *
 * @customElement
 * @polymer
 */
class VistaEstadisticas extends PolymerElement {

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
        return 'vista-estadisticas';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaEstadisticas.is, VistaEstadisticas);
