import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artista-relacionado`
 *
 * VistaArtistaRelacionado element.
 *
 * @customElement
 * @polymer
 */
class VistaArtistaRelacionado extends PolymerElement {

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
        return 'vista-artista-relacionado';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtistaRelacionado.is, VistaArtistaRelacionado);
