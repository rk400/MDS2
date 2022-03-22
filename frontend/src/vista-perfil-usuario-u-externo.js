import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-perfil-usuario-u-externo`
 *
 * VistaPerfilUsuarioUExterno element.
 *
 * @customElement
 * @polymer
 */
class VistaPerfilUsuarioUExterno extends PolymerElement {

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
        return 'vista-perfil-usuario-u-externo';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPerfilUsuarioUExterno.is, VistaPerfilUsuarioUExterno);
