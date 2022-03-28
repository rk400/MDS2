import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import './vista-cabecera-buscar.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-area.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaConfiguracionArtista extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vista-cabecera-buscar style="height: 10%;"></vista-cabecera-buscar>
 <h1>Configuración</h1>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; height: 20%;">
  <vaadin-vertical-layout style="width: 100%; align-self: center;">
   <label style="margin-bottom: var(--lumo-space-xs); align-self: center;">Foto de perfil:</label>
   <img style="width: 12%; align-self: center;" src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png">s</img>
   <vaadin-button style="margin-top: var(--lumo-space-s); align-self: center;">
    Subir foto 
   </vaadin-button>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing" style="width: 100%; align-self: center;">
   <vaadin-text-area label="Información sobre conciertos o festivales" placeholder="Introduzca información sobre su próximo evento" style="align-self: center; width: 100%; margin: var(--lumo-space-s); margin-right: var(--lumo-space-s);"></vaadin-text-area>
   <vaadin-button style="align-self: center;">
    Guardar cambios
   </vaadin-button>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; height: 15%; align-self: center; justify-content: center;">
  <vaadin-button style="width: 17%; align-self: center; margin: var(--lumo-space-s);">
   Editar información e-mail
  </vaadin-button>
  <label style="width: 40%; align-self: center;">Cambiar/Comprobar el correo eléctronico asociado a la cuenta.</label>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; height: 15%; align-self: center; justify-content: center;">
  <vaadin-button style="width: 17%; align-self: center; margin: var(--lumo-space-s);">
   Dar de baja
  </vaadin-button>
  <label style="width: 40%; align-self: center;">Eliminar su usuario de la plataforma (información borrada en 30 días).</label>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; height: 15%; align-self: center; justify-content: center;">
  <vaadin-button style="width: 17%; align-self: center; margin: var(--lumo-space-s);">
   Cerrar sesión
  </vaadin-button>
  <label style="width: 40%; align-self: center;">Terminar la sesión actual y volver a la pantalla de inicio.</label>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; align-self: center; justify-content: center;">
  <h4 style="align-self: center;">Contacto de soporte</h4>
  <label style="align-self: center;">E-mail: admin@sputifly.es</label>
  <label style="align-self: center;">|</label>
  <label style="align-self: center;">Teléfono; 687403964</label>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-configuracion-artista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaConfiguracionArtista.is, VistaConfiguracionArtista);
