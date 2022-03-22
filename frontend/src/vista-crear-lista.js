import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-crear-lista`
 *
 * VistaCrearLista element.
 *
 * @customElement
 * @polymer
 */
class VistaCrearLista extends PolymerElement {

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
        return 'vista-crear-lista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCrearLista.is, VistaCrearLista);
