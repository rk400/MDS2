import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-anadir-elementos`
 *
 * VistaAnadirElementos element.
 *
 * @customElement
 * @polymer
 */
class VistaAnadirElementos extends PolymerElement {

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
        return 'vista-anadir-elementos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirElementos.is, VistaAnadirElementos);
