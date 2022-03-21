import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-lista-frecuente`
 *
 * VistaListaFrecuente element.
 *
 * @customElement
 * @polymer
 */
class VistaListaFrecuente extends PolymerElement {

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
        return 'vista-lista-frecuente';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListaFrecuente.is, VistaListaFrecuente);
