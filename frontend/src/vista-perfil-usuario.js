import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-avatar/src/vaadin-avatar.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';

class VistaPerfilUsuario extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; margin: var(--lumo-space-l); align-self: center;">
  <vaadin-avatar id="avatar" style="width: 25%; height: 100%; align-self: center;"></vaadin-avatar>
  <vaadin-vertical-layout theme="spacing-xs" style="width: 100%; height: 100%;">
   <vaadin-horizontal-layout theme="spacing">
    <h2>PERFIL </h2>
    <vaadin-button id="botonEditarPerfil" style="align-self: center;" theme="secundary">
      Editar perfil 
    </vaadin-button>
    <vaadin-button id="botonSeguir" style="align-self: center;">
      Seguir 
    </vaadin-button>
   </vaadin-horizontal-layout>
   <label id="labelNombre">Nombre</label>
   <vaadin-horizontal-layout theme="spacing">
    <label id="labelNumSeg">Num</label>
    <label>seguidores</label>
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing" style="align-self: center;">
   <vaadin-button theme="icon" aria-label="Add new" id="botonConfig" style="align-self: center;">
    <iron-icon icon="lumo:cog"></iron-icon>
   </vaadin-button>
   <label>Configuración</label>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing">
   <h2>Próximos conciertos/festivales</h2>
   <label>TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextText TextTextTextTextTextTextTextText</label>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <h2>Listas creadas</h2>
  <label style="align-self: center;">(x/100)</label>
  <vaadin-button id="botonNuevaLista" style="align-self: center;">
    Nueva lista 
  </vaadin-button>
  <vaadin-button theme="icon" aria-label="Add new" id="botonIzq" style="align-self: center;">
   <iron-icon icon="lumo:angle-left"></iron-icon>
  </vaadin-button>
  <vaadin-button theme="icon" aria-label="Add new" id="botonDerch" style="align-self: center;">
   <iron-icon icon="lumo:angle-right"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-grid id="gridListas"></vaadin-grid>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
  <vaadin-vertical-layout theme="spacing" style="margin: var(--lumo-space-m);">
   <h2>Canciones populares 
    <vaadin-button theme="icon" aria-label="Add new" style="margin: var(--lumo-space-m);">
     <iron-icon icon="lumo:play"></iron-icon>
    </vaadin-button></h2>
   <vaadin-grid></vaadin-grid>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout theme="spacing">
   <h2>Artistas similares </h2>
   <vaadin-grid></vaadin-grid>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <h2>Álbumes</h2>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:angle-left"></iron-icon>
  </vaadin-button>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:angle-right"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-grid></vaadin-grid>
 <vaadin-horizontal-layout theme="spacing">
  <h2>Lista en las que participa</h2>
  <vaadin-button style="align-self: center;">
   Personalizar listas visibles
  </vaadin-button>
  <vaadin-button theme="icon" aria-label="Add new" style="flex-grow: 0; align-self: center;">
   <iron-icon icon="lumo:angle-left"></iron-icon>
  </vaadin-button>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:angle-right"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-grid></vaadin-grid>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-perfil-usuario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPerfilUsuario.is, VistaPerfilUsuario);
