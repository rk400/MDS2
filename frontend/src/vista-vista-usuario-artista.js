import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-vista-usuario-artista`
 *
 * VistaVistaUsuarioArtista element.
 *
 * @customElement
 * @polymer
 */
class VistaVistaUsuarioArtista extends PolymerElement {

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
        return 'vista-vista-usuario-artista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaVistaUsuarioArtista.is, VistaVistaUsuarioArtista);
