import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-notificacion`
 *
 * VistaNotificacion element.
 *
 * @customElement
 * @polymer
 */
class VistaNotificacion extends PolymerElement {

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
        return 'vista-notificacion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaNotificacion.is, VistaNotificacion);
