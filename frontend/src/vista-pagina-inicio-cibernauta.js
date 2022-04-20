import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './vista-cabecera-cibernauta.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import './vista-tendencias-actuales.js';
import './vista-footer-reproducir-musica-cibernauta.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import './vista-ultimos-exitos.js';

class VistaPaginaInicioCibernauta extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;" id="vaadinVerticalLayout">
 <vista-cabecera-cibernauta style="height: 10%; width: 100%; " id="vistaCabeceraCibernauta"></vista-cabecera-cibernauta>
 <label style="align-self: center; margin: var(--lumo-space-xs);" id="label">Explora los últimos éxitos de los mejores artistas: </label>
 <vaadin-horizontal-layout theme="spacing" style="width: 100%; justify-content: space-around; flex-grow: 0; flex-shrink: 1; margin: var(--lumo-space-m);" id="vaadinHorizontalLayout">
  <vista-ultimos-exitos style="align-self: center; width: 100%;" id="vistaUltimosExitos"></vista-ultimos-exitos>
 </vaadin-horizontal-layout>
 <label style="align-self: center; margin: var(--lumo-space-xs); padding: var(--lumo-space-xl);" id="label1">Explora las tendencias actuales que hay entre los usuarios:</label>
 <vaadin-horizontal-layout theme="spacing" style="justify-content: space-around; width: 100%;" id="vaadinHorizontalLayout1">
  <vista-tendencias-actuales style="align-self: center; width: 100%;" id="vistaTendenciasActuales"></vista-tendencias-actuales>
 </vaadin-horizontal-layout>
 <vista-footer-reproducir-musica-cibernauta style="width: 100%; height: 10%;" id="vistaFooterReproducirMusicaCibernauta"></vista-footer-reproducir-musica-cibernauta>
</vaadin-vertical-layout>
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
