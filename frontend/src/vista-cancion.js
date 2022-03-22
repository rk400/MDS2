import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-cancion`
 *
 * VistaCancion element.
 *
 * @customElement
 * @polymer
 */
class VistaCancion extends PolymerElement {

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
        return 'vista-cancion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancion.is, VistaCancion);
