import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-canciones-administrador`
 *
 * VistaCancionesAdministrador element.
 *
 * @customElement
 * @polymer
 */
class VistaCancionesAdministrador extends PolymerElement {

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
        return 'vista-canciones-administrador';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionesAdministrador.is, VistaCancionesAdministrador);
