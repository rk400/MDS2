import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-perfil-usuario`
 *
 * VistaPerfilUsuario element.
 *
 * @customElement
 * @polymer
 */
class VistaPerfilUsuario extends PolymerElement {

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
        return 'vista-perfil-usuario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPerfilUsuario.is, VistaPerfilUsuario);
