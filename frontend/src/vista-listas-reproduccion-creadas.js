import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-listas-reproduccion-creadas`
 *
 * VistaListasReproduccionCreadas element.
 *
 * @customElement
 * @polymer
 */
class VistaListasReproduccionCreadas extends PolymerElement {

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
        return 'vista-listas-reproduccion-creadas';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListasReproduccionCreadas.is, VistaListasReproduccionCreadas);
