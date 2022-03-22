import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-canciones-preferidas`
 *
 * VistaCancionesPreferidas element.
 *
 * @customElement
 * @polymer
 */
class VistaCancionesPreferidas extends PolymerElement {

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
        return 'vista-canciones-preferidas';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionesPreferidas.is, VistaCancionesPreferidas);
