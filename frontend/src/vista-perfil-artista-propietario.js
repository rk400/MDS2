import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-perfil-artista-propietario`
 *
 * VistaPerfilArtistaPropietario element.
 *
 * @customElement
 * @polymer
 */
class VistaPerfilArtistaPropietario extends PolymerElement {

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
        return 'vista-perfil-artista-propietario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPerfilArtistaPropietario.is, VistaPerfilArtistaPropietario);
