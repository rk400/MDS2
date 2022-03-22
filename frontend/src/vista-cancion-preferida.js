import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-cancion-preferida`
 *
 * VistaCancionPreferida element.
 *
 * @customElement
 * @polymer
 */
class VistaCancionPreferida extends PolymerElement {

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
        return 'vista-cancion-preferida';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionPreferida.is, VistaCancionPreferida);
