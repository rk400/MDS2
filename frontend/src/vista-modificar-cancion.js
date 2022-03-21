import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-modificar-cancion`
 *
 * VistaModificarCancion element.
 *
 * @customElement
 * @polymer
 */
class VistaModificarCancion extends PolymerElement {

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
        return 'vista-modificar-cancion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaModificarCancion.is, VistaModificarCancion);
