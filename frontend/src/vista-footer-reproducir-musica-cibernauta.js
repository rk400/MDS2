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
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-between;" id="vaadinHorizontalLayout">
 <vaadin-vertical-layout theme="spacing" style="align-items: flex-start; justify-content: center; margin: var(--lumo-space-xs);" id="vaadinVerticalLayout">
  <label style="align-self: flex-start;" id="label">Canción</label>
  <label style="align-self: flex-start;" id="label1">Autor</label>
 </vaadin-vertical-layout>
 <vaadin-vertical-layout theme="spacing" style="width: 50%; justify-content: center;" id="vaadinVerticalLayout1">
  <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;" id="vaadinHorizontalLayout1">
   <vaadin-button id="vaadinButton">
     ◄10s 
   </vaadin-button>
   <vaadin-button id="vaadinButton2">
    ◄◄
   </vaadin-button>
   <vaadin-button id="vaadinButton1">
    ┃┃
   </vaadin-button>
   <vaadin-button id="vaadinButton3">
    ►►
   </vaadin-button>
   <vaadin-button id="vaadinButton4">
     10s► 
   </vaadin-button>
   <vaadin-button id="vaadinButton5" style="font-size: 20px;">
    ∞
   </vaadin-button>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout theme="spacing" style="width: 100%;" id="vaadinHorizontalLayout2">
   <label id="label2">0:00</label>
   <vaadin-progress-bar id="vaadinProgressBar"></vaadin-progress-bar>
   <label id="label3">0:00</label>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
 <vaadin-vertical-layout theme="spacing" style="align-self: center; margin: var(--lumo-space-xs);" id="vaadinVerticalLayout2">
  <vaadin-horizontal-layout theme="spacing" id="vaadinHorizontalLayout3">
   <vaadin-button id="vaadinButton6">
     Volumen ⎌ 
   </vaadin-button>
   <vaadin-button style="align-self: center;" id="vaadinButton7">
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
