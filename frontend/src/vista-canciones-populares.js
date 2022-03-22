import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-canciones-populares`
 *
 * VistaCancionesPopulares element.
 *
 * @customElement
 * @polymer
 */
class VistaCancionesPopulares extends PolymerElement {

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
        return 'vista-canciones-populares';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionesPopulares.is, VistaCancionesPopulares);
