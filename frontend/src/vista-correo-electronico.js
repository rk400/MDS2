import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-correo-electronico`
 *
 * VistaCorreoElectronico element.
 *
 * @customElement
 * @polymer
 */
class VistaCorreoElectronico extends PolymerElement {

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
        return 'vista-correo-electronico';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCorreoElectronico.is, VistaCorreoElectronico);
