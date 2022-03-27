import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import './vista-notificacion.js';

class VistaListaDeNotificaciones extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <h1>Notificaciones</h1>
 <vista-notificacion style="width: 100%;"></vista-notificacion>
 <vista-notificacion style="width: 100%;"></vista-notificacion>
 <vista-notificacion style="width: 100%;"></vista-notificacion>
 <vista-notificacion style="width: 100%;"></vista-notificacion>
 <vista-notificacion style="width: 100%;"></vista-notificacion>
</vaadin-vertical-layout>
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
