import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-anadir-artistas`
 *
 * VistaAnadirArtistas element.
 *
 * @customElement
 * @polymer
 */
class VistaAnadirArtistas extends PolymerElement {

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
        return 'vista-anadir-artistas';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirArtistas.is, VistaAnadirArtistas);
