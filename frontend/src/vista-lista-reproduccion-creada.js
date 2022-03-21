import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-lista-reproduccion-creada`
 *
 * VistaListaReproduccionCreada element.
 *
 * @customElement
 * @polymer
 */
class VistaListaReproduccionCreada extends PolymerElement {

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
        return 'vista-lista-reproduccion-creada';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListaReproduccionCreada.is, VistaListaReproduccionCreada);
