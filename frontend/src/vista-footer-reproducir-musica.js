import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class VistaFooterReproducirMusica extends PolymerElement {

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
  <label>Autor</label>
 </vaadin-vertical-layout>
 <vaadin-vertical-layout theme="spacing" style="width: 50%; justify-content: center; align-self: center;">
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
  <vaadin-horizontal-layout theme="spacing" style="justify-content: flex-end; align-self: flex-end; align-items: baseline;">
   <vaadin-button>
    Volumen ⎌
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
