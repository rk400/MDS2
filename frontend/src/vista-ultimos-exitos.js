import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-ultimos-exitos`
 *
 * VistaUltimosExitos element.
 *
 * @customElement
 * @polymer
 */
class VistaUltimosExitos extends PolymerElement {

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
        return 'vista-ultimos-exitos';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaUltimosExitos.is, VistaUltimosExitos);
