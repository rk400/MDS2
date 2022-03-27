import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import './vista-cabecera-buscar.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaConfiguracion extends PolymerElement {

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
 <h1>Configuración</h1>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center; height: 20%;">
  <vaadin-button style="align-self: center; margin: var(--lumo-space-s); width: 17%;">
   Editar información e-mail
  </vaadin-button>
  <label style="align-self: center; width: 40%;">Cambiar/Comprobar el correo eléctronico asociado a la cuenta.</label>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center; height: 20%;">
  <vaadin-button style="align-self: center; margin: var(--lumo-space-s); width: 17%;">
   Dar de baja
  </vaadin-button>
  <label style="align-self: center; width: 40%;">Eliminar su usuario de la plataforma (información borrada en 30 días).</label>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center; height: 20%;">
  <vaadin-button style="align-self: center; margin: var(--lumo-space-s); width: 17%;">
   Cerrar sesión
  </vaadin-button>
  <label style="align-self: center; width: 40%;">Terminar la sesión actual y volver a la pantalla de inicio.</label>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;">
  <h4 style="align-self: center;">Contacto de soporte</h4>
  <label style="align-self: center;">E-mail: admin@sputifly.es</label>
  <label style="align-self: center;">|</label>
  <label style="align-self: center;">Teléfono; 687403964</label>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
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
