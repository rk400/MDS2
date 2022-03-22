import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-compartir-cancion`
 *
 * VistaCompartirCancion element.
 *
 * @customElement
 * @polymer
 */
class VistaCompartirCancion extends PolymerElement {

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
        return 'vista-compartir-cancion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCompartirCancion.is, VistaCompartirCancion);
