import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-perfil-artista`
 *
 * VistaPerfilArtista element.
 *
 * @customElement
 * @polymer
 */
class VistaPerfilArtista extends PolymerElement {

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
        return 'vista-perfil-artista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPerfilArtista.is, VistaPerfilArtista);
