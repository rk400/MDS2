import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-personalizar-listas-visibles`
 *
 * VistaPersonalizarListasVisibles element.
 *
 * @customElement
 * @polymer
 */
class VistaPersonalizarListasVisibles extends PolymerElement {

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
        return 'vista-personalizar-listas-visibles';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPersonalizarListasVisibles.is, VistaPersonalizarListasVisibles);
