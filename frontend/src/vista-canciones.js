import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-canciones`
 *
 * VistaCanciones element.
 *
 * @customElement
 * @polymer
 */
class VistaCanciones extends PolymerElement {

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
        return 'vista-canciones';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCanciones.is, VistaCanciones);
