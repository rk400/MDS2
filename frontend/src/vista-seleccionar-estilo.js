import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-seleccionar-estilo`
 *
 * VistaSeleccionarEstilo element.
 *
 * @customElement
 * @polymer
 */
class VistaSeleccionarEstilo extends PolymerElement {

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
        return 'vista-seleccionar-estilo';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSeleccionarEstilo.is, VistaSeleccionarEstilo);
