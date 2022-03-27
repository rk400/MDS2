import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaFooterReproducirMusicaUsuario extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-between;">
 <vaadin-vertical-layout theme="spacing" style="margin: var(--lumo-space-xs); align-self: center; align-items: flex-start; justify-content: center;">
  <label>Canción</label>
  <label>Label</label>
 </vaadin-vertical-layout>
 <vaadin-button theme="icon" aria-label="Add new" style="align-self: center; flex-grow: 0;">
  <iron-icon src="https://cdn0.iconfinder.com/data/icons/carbon-mobile-browser-1/48/add-favorites-512.png"></iron-icon>
 </vaadin-button>
 <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;">
  <iron-icon src="https://freesvg.org/img/1464710523.png"></iron-icon>
 </vaadin-button>
 <vaadin-vertical-layout theme="spacing" style="width: 50%; align-self: center; justify-content: center;">
  <vaadin-horizontal-layout theme="spacing" style="width: 100%; align-self: center; justify-content: center;">
   <vaadin-button>
    ◄10s
   </vaadin-button>
   <vaadin-button>
    ◄
   </vaadin-button>
   <vaadin-button>
    ■
   </vaadin-button>
   <vaadin-button>
    ►
   </vaadin-button>
   <vaadin-button>
    10s►
   </vaadin-button>
   <vaadin-button>
    ♾
   </vaadin-button>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
   <label style="align-self: center;">0:00</label>
   <vaadin-progress-bar style="align-self: center;"></vaadin-progress-bar>
   <label style="align-self: center;">0:00</label>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
 <vaadin-vertical-layout theme="spacing" style="align-self: center;">
  <vaadin-horizontal-layout theme="spacing" style="align-self: flex-end; justify-content: flex-end; align-items: baseline;">
   <vaadin-button style="align-self: center;">
    Volumen ⎌
   </vaadin-button>
   <vaadin-button theme="icon" aria-label="Add new">
    <iron-icon icon="lumo:menu"></iron-icon>
   </vaadin-button>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-footer-reproducir-musica-usuario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaFooterReproducirMusicaUsuario.is, VistaFooterReproducirMusicaUsuario);
