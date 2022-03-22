import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-tendencia-actual`
 *
 * VistaTendenciaActual element.
 *
 * @customElement
 * @polymer
 */
class VistaTendenciaActual extends PolymerElement {

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
        return 'vista-tendencia-actual';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaTendenciaActual.is, VistaTendenciaActual);
