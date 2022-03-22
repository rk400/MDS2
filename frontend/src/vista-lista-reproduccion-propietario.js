import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-lista-reproduccion-propietario`
 *
 * VistaListaReproduccionPropietario element.
 *
 * @customElement
 * @polymer
 */
class VistaListaReproduccionPropietario extends PolymerElement {

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
        return 'vista-lista-reproduccion-propietario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListaReproduccionPropietario.is, VistaListaReproduccionPropietario);
