import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-estilo-similar`
 *
 * VistaEstiloSimilar element.
 *
 * @customElement
 * @polymer
 */
class VistaEstiloSimilar extends PolymerElement {

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
        return 'vista-estilo-similar';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaEstiloSimilar.is, VistaEstiloSimilar);
