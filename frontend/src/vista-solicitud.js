import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-solicitud`
 *
 * VistaSolicitud element.
 *
 * @customElement
 * @polymer
 */
class VistaSolicitud extends PolymerElement {

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
        return 'vista-solicitud';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaSolicitud.is, VistaSolicitud);
