import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import './vista-cabecera-buscar.js';
import './vista-lista-de-notificaciones.js';
import './vista-footer-reproducir-musica-usuario.js';

class VistaVerNotificaciones extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vista-cabecera-buscar style="width: 100%; height: 10%;"></vista-cabecera-buscar>
 <vista-lista-de-notificaciones style="width: 100%;"></vista-lista-de-notificaciones>
 <vista-footer-reproducir-musica-usuario style="width: 100%; height: 20%;"></vista-footer-reproducir-musica-usuario>
</vaadin-vertical-layout>
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
