import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-perfil-u-externo`
 *
 * VistaPerfilUExterno element.
 *
 * @customElement
 * @polymer
 */
class VistaPerfilUExterno extends PolymerElement {

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
        return 'vista-perfil-u-externo';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPerfilUExterno.is, VistaPerfilUExterno);
