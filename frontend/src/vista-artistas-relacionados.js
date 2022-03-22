import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artistas-relacionados`
 *
 * VistaArtistasRelacionados element.
 *
 * @customElement
 * @polymer
 */
class VistaArtistasRelacionados extends PolymerElement {

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
        return 'vista-artistas-relacionados';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtistasRelacionados.is, VistaArtistasRelacionados);
