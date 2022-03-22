import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-tendencias-actuales`
 *
 * VistaTendenciasActuales element.
 *
 * @customElement
 * @polymer
 */
class VistaTendenciasActuales extends PolymerElement {

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
        return 'vista-tendencias-actuales';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaTendenciasActuales.is, VistaTendenciasActuales);
