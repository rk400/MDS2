import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-ver-notificaciones`
 *
 * VistaVerNotificaciones element.
 *
 * @customElement
 * @polymer
 */
class VistaVerNotificaciones extends PolymerElement {

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
        return 'vista-ver-notificaciones';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaVerNotificaciones.is, VistaVerNotificaciones);
