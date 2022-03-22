import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-mostrar-menu-seleccion`
 *
 * VistaMostrarMenuSeleccion element.
 *
 * @customElement
 * @polymer
 */
class VistaMostrarMenuSeleccion extends PolymerElement {

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
        return 'vista-mostrar-menu-seleccion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaMostrarMenuSeleccion.is, VistaMostrarMenuSeleccion);
