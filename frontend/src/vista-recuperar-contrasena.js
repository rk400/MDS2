import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-recuperar-contrasena`
 *
 * VistaRecuperarContrasena element.
 *
 * @customElement
 * @polymer
 */
class VistaRecuperarContrasena extends PolymerElement {

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
        return 'vista-recuperar-contrasena';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaRecuperarContrasena.is, VistaRecuperarContrasena);
