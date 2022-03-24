import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';

class VistaFooterReproducirMusicaCibernauta extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-between;">
 <vaadin-vertical-layout theme="spacing" style="align-items: flex-start; justify-content: center; margin: var(--lumo-space-xs);">
  <label style="align-self: flex-start;">Canción</label>
  <label style="align-self: flex-start;">Autor</label>
 </vaadin-vertical-layout>
 <vaadin-vertical-layout theme="spacing" style="width: 50%; justify-content: center;">
  <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;">
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
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
   <label>0:00</label>
   <vaadin-progress-bar></vaadin-progress-bar>
   <label>0:00</label>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
 <vaadin-vertical-layout theme="spacing" style="align-self: center; margin: var(--lumo-space-xs);">
  <vaadin-horizontal-layout theme="spacing">
   <vaadin-button>
    Volumen ⎌
   </vaadin-button>
   <vaadin-button style="align-self: center;">
    Créditos 
   </vaadin-button>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
</vaadin-horizontal-layout>
`;
    }

    static get is() {
        return 'vista-footer-reproducir-musica-cibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaFooterReproducirMusicaCibernauta.is, VistaFooterReproducirMusicaCibernauta);
