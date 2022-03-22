import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-canciones-visibles-para-cibernauta`
 *
 * VistaCancionesVisiblesParaCibernauta element.
 *
 * @customElement
 * @polymer
 */
class VistaCancionesVisiblesParaCibernauta extends PolymerElement {

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
        return 'vista-canciones-visibles-para-cibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionesVisiblesParaCibernauta.is, VistaCancionesVisiblesParaCibernauta);
