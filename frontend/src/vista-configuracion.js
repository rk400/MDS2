import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-configuracion`
 *
 * VistaConfiguracion element.
 *
 * @customElement
 * @polymer
 */
class VistaConfiguracion extends PolymerElement {

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
        return 'vista-configuracion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaConfiguracion.is, VistaConfiguracion);
