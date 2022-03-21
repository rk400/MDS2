import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-solicitudes`
 *
 * VistaSolicitudes element.
 *
 * @customElement
 * @polymer
 */
class VistaSolicitudes extends PolymerElement {

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
        return 'vista-solicitudes';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSolicitudes.is, VistaSolicitudes);
