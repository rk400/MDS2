import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-cancion-popular`
 *
 * VistaCancionPopular element.
 *
 * @customElement
 * @polymer
 */
class VistaCancionPopular extends PolymerElement {

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
        return 'vista-cancion-popular';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionPopular.is, VistaCancionPopular);
