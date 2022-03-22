import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artista`
 *
 * VistaArtista element.
 *
 * @customElement
 * @polymer
 */
class VistaArtista extends PolymerElement {

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
        return 'vista-artista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtista.is, VistaArtista);
