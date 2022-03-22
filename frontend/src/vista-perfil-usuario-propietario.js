import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-perfil-usuario-propietario`
 *
 * VistaPerfilUsuarioPropietario element.
 *
 * @customElement
 * @polymer
 */
class VistaPerfilUsuarioPropietario extends PolymerElement {

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
        return 'vista-perfil-usuario-propietario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPerfilUsuarioPropietario.is, VistaPerfilUsuarioPropietario);
