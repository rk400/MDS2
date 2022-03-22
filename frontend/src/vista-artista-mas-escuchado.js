import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artista-mas-escuchado`
 *
 * VistaArtistaMasEscuchado element.
 *
 * @customElement
 * @polymer
 */
class VistaArtistaMasEscuchado extends PolymerElement {

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
        return 'vista-artista-mas-escuchado';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtistaMasEscuchado.is, VistaArtistaMasEscuchado);
