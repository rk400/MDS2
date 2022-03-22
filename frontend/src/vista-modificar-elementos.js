import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-modificar-elementos`
 *
 * VistaModificarElementos element.
 *
 * @customElement
 * @polymer
 */
class VistaModificarElementos extends PolymerElement {

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
        return 'vista-modificar-elementos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaModificarElementos.is, VistaModificarElementos);
