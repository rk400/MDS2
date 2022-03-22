import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-footer-reproducir-musica-usuario`
 *
 * VistaFooterReproducirMusicaUsuario element.
 *
 * @customElement
 * @polymer
 */
class VistaFooterReproducirMusicaUsuario extends PolymerElement {

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
        return 'vista-footer-reproducir-musica-usuario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaFooterReproducirMusicaUsuario.is, VistaFooterReproducirMusicaUsuario);
