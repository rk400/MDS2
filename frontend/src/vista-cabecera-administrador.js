import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-cabecera-administrador`
 *
 * VistaCabeceraAdministrador element.
 *
 * @customElement
 * @polymer
 */
class VistaCabeceraAdministrador extends PolymerElement {

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
        return 'vista-cabecera-administrador';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCabeceraAdministrador.is, VistaCabeceraAdministrador);
