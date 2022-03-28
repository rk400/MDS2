import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import './vista-cabecera-administrador.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-canciones-visibles-para-cibernauta.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaPaginaInicioAdministrador extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vista-cabecera-administrador style="width: 100%; height: 10%;"></vista-cabecera-administrador>
 <h1>Administración</h1>
 <vaadin-horizontal-layout style="width: 100%;">
  <vista-canciones-visibles-para-cibernauta style="width: 20%;"></vista-canciones-visibles-para-cibernauta>
  <vaadin-vertical-layout style="justify-content: space-around; width: 100%;">
   <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
    <vaadin-button style="align-self: center; width: 17%;">
     Solicitudes artistas
    </vaadin-button>
    <label style="align-self: center;">Solicitudes enviadas por artistas para unirse a la plataforma.</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
    <vaadin-button style="align-self: center; width: 17%;">
     Añadir elementos
    </vaadin-button>
    <label style="align-self: center;">Adición de artistas, estilos, álbumes y canciones a la base de datos.</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
    <vaadin-button style="align-self: center; width: 17%;">
     Modificar elementos
    </vaadin-button>
    <label style="align-self: center;">Modificación o eliminación de artistas, estilos, álbumes y canciones a la base de datos.</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
    <vaadin-button style="align-self: center; width: 17%;">
     Vista de usuario/artista
    </vaadin-button>
    <label style="align-self: center;">Ver la web con el rol de usuario o artista para probar las acciones que se pueden realizar.</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout theme="spacing" style="justify-content: flex-start; width: 100%;">
    <vaadin-button style="align-self: center; width: 17%;">
     Dar de baja usuario
    </vaadin-button>
    <label style="align-self: center;">Eliminación de usuario de la plataforma por incumplimiento de las normas.</label>
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-pagina-inicio-administrador';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPaginaInicioAdministrador.is, VistaPaginaInicioAdministrador);
