import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-usuario`
 *
 * VistaUsuario element.
 *
 * @customElement
 * @polymer
 */
class VistaUsuario extends PolymerElement {

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
        return 'vista-usuario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaUsuario.is, VistaUsuario);
