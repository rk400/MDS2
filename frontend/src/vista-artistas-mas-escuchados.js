import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artistas-mas-escuchados`
 *
 * VistaArtistasMasEscuchados element.
 *
 * @customElement
 * @polymer
 */
class VistaArtistasMasEscuchados extends PolymerElement {

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
        return 'vista-artistas-mas-escuchados';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtistasMasEscuchados.is, VistaArtistasMasEscuchados);
