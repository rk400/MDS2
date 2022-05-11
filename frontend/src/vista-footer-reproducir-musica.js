import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';

class VistaFooterReproducirMusica extends PolymerElement {

	static get template() {
		 return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-horizontal-layout class="content" style="width: 100%; height: 100%; justify-content: space-between; margin-top: var(--lumo-space-s); padding-bottom: var(--lumo-space-m); padding-right: var(--lumo-space-s); padding-left: var(--lumo-space-s);" id="vaadinHorizontalLayout">
 <vaadin-vertical-layout theme="spacing" style="margin: var(--lumo-space-xs); align-self: center; align-items: flex-start; justify-content: center;" id="vaadinVerticalLayout">
  <label id="label">Canción</label>
  <label id="label1">Autor</label>
 </vaadin-vertical-layout>
 <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;" id="vaadinButton">
  <iron-icon src="https://cdn0.iconfinder.com/data/icons/carbon-mobile-browser-1/48/add-favorites-512.png" id="ironIcon"></iron-icon>
 </vaadin-button>
 <vaadin-button theme="icon" aria-label="Add new" style="align-self: center;" id="vaadinButton1">
  <iron-icon src="https://freesvg.org/img/1464710523.png" id="ironIcon1"></iron-icon>
 </vaadin-button>
 <vaadin-vertical-layout theme="spacing" style="width: 50%; justify-content: center; align-self: center;" id="vaadinVerticalLayout1">
  <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: center;" id="vaadinHorizontalLayout1">
   <vaadin-button id="vaadinButton2">
     ◄10s 
   </vaadin-button>
   <vaadin-button id="vaadinButton3">
     ◄◄ 
   </vaadin-button>
   <vaadin-button id="vaadinButton4">
     ■ 
   </vaadin-button>
   <vaadin-button id="vaadinButton5">
     ►► 
   </vaadin-button>
   <vaadin-button id="vaadinButton6">
     10s► 
   </vaadin-button>
   <vaadin-button id="vaadinButton7">
     ♾ 
   </vaadin-button>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout theme="spacing" style="width: 100%;" id="vaadinHorizontalLayout2">
   <label style="align-self: center;" id="label2">0:00</label>
   <vaadin-progress-bar style="align-self: center;" id="vaadinProgressBar"></vaadin-progress-bar>
   <label style="align-self: center;" id="label3">0:00</label>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
 <vaadin-vertical-layout theme="spacing" style="align-self: center;" id="vaadinVerticalLayout2">
  <vaadin-horizontal-layout theme="spacing" style="justify-content: flex-end; align-self: flex-end; align-items: baseline;" id="vaadinHorizontalLayout3">
   <vaadin-button id="vaadinButton8">
     Volumen ⎌ 
   </vaadin-button>
   <vaadin-button id="vaadinButton9">
    <iron-icon icon="lumo:menu" id="ironIcon2"></iron-icon>
   </vaadin-button>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
</vaadin-horizontal-layout>
`;
	}

	static get is() {
		return 'vista-footer-reproducir-musica';
	}

	static get properties() {
		return {
			// Declare your properties here.
		};
	}
}

customElements.define(VistaFooterReproducirMusica.is, VistaFooterReproducirMusica);
