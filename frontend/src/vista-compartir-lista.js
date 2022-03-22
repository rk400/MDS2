import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-compartir-lista`
 *
 * VistaCompartirLista element.
 *
 * @customElement
 * @polymer
 */
class VistaCompartirLista extends PolymerElement {

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
        return 'vista-compartir-lista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCompartirLista.is, VistaCompartirLista);
