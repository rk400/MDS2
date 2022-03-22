import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-listas-reproduccion`
 *
 * VistaListasReproduccion element.
 *
 * @customElement
 * @polymer
 */
class VistaListasReproduccion extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
        `;
    }

    static get is() {
        return 'vista-listas-reproduccion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListasReproduccion.is, VistaListasReproduccion);
