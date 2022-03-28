import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaAnadirCanciones extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; align-items: flex-start; margin-left: var(--lumo-space-s);">
 <h1>Añadir canciones</h1>
 <vaadin-text-field label="Título:" placeholder="Introduzca nombre de la canción" style="width: 60%;"></vaadin-text-field>
 <h2>Subir archivo de audio</h2>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
  <vaadin-text-field style="width: 70%; align-self: center;" label="*Solo permitido: .mp3, .mp4 y .ogg"></vaadin-text-field>
  <vaadin-button style="align-self: flex-end;">
    Explorar... 
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">Estilos:</label>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">Artista creador:</label>
  <vaadin-combo-box style="align-self: center;" placeholder="Seleccionar artista"></vaadin-combo-box>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">Álbumes que la incluyen:</label>
  <vaadin-combo-box placeholder="Seleccionar álbumes">
    Seleccionar álbumes 
  </vaadin-combo-box>
  <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </vaadin-horizontal-layout>
 <h2>Datos para los créditos</h2>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">Productor:</label>
  <vaadin-text-field placeholder="Introduzca productores">
    Text 
  </vaadin-text-field>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">Compositor:</label>
  <vaadin-text-field placeholder="Introduzca compositores"></vaadin-text-field>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing">
  <label style="align-self: center;">Intérprete:</label>
  <vaadin-text-field placeholder="Introduzca intérpretes"></vaadin-text-field>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout style="align-self: stretch; justify-content: space-around; padding: var(--lumo-space-m);">
  <vaadin-button>
    Cancelar 
  </vaadin-button>
  <vaadin-button id="vaadinButton">
   Eliminar
  </vaadin-button>
  <vaadin-button>
    Añadir 
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-anadir-canciones';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaAnadirCanciones.is, VistaAnadirCanciones);
