import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-lista-de-notificaciones`
 *
 * VistaListaDeNotificaciones element.
 *
 * @customElement
 * @polymer
 */
class VistaListaDeNotificaciones extends PolymerElement {

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
        return 'vista-lista-de-notificaciones';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListaDeNotificaciones.is, VistaListaDeNotificaciones);
