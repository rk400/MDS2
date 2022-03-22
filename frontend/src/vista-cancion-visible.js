import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-cancion-visible`
 *
 * VistaCancionVisible element.
 *
 * @customElement
 * @polymer
 */
class VistaCancionVisible extends PolymerElement {

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
        return 'vista-cancion-visible';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionVisible.is, VistaCancionVisible);
