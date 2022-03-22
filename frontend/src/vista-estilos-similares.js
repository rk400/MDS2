import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-estilos-similares`
 *
 * VistaEstilosSimilares element.
 *
 * @customElement
 * @polymer
 */
class VistaEstilosSimilares extends PolymerElement {

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
        return 'vista-estilos-similares';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaEstilosSimilares.is, VistaEstilosSimilares);
