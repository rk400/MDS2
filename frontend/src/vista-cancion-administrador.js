import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-cancion-administrador`
 *
 * VistaCancionAdministrador element.
 *
 * @customElement
 * @polymer
 */
class VistaCancionAdministrador extends PolymerElement {

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
        return 'vista-cancion-administrador';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionAdministrador.is, VistaCancionAdministrador);
