import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-modificar-lista`
 *
 * VistaModificarLista element.
 *
 * @customElement
 * @polymer
 */
class VistaModificarLista extends PolymerElement {

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
        return 'vista-modificar-lista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaModificarLista.is, VistaModificarLista);
