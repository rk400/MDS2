import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import './vista-cabecera-cibernauta.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-tendencias-actuales.js';
import './vista-ultimos-exitos.js';
import './vista-footer-reproducir-musica-cibernauta.js';

class VistaPaginaInicioCibernauta extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vista-cabecera-cibernauta style="margin: var(--lumo-space-xs); height: 10%;"></vista-cabecera-cibernauta>
 <label style="align-self: center; margin: var(--lumo-space-xs);">Explora los últimos éxitos de los mejores artistas: </label>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: space-around; flex-grow: 0; flex-shrink: 1; margin: var(--lumo-space-m);">
  <vista-ultimos-exitos style="align-self: center; width: 100%;"></vista-ultimos-exitos>
 </vaadin-horizontal-layout>
 <label style="align-self: center; margin: var(--lumo-space-xs); padding: var(--lumo-space-xl);">Explora las tendencias actuales que hay entre los usuarios:</label>
 <vaadin-horizontal-layout theme="spacing" style="justify-content: space-around; width: 100%;">
  <vista-tendencias-actuales style="align-self: center; width: 100%;"></vista-tendencias-actuales>
 </vaadin-horizontal-layout>
 <vista-footer-reproducir-musica-cibernauta style="width: 100%; height: 10%;"></vista-footer-reproducir-musica-cibernauta>
</vaadin-vertical-layout>
<vaadin-vertical-layout theme="spacing" style="width: 100%; height: 100%;"></vaadin-vertical-layout>
<vaadin-vertical-layout theme="spacing" style="width: 100%; height: 100%;"></vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'vista-pagina-inicio-cibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPaginaInicioCibernauta.is, VistaPaginaInicioCibernauta);
