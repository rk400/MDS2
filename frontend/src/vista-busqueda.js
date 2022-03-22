import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-busqueda`
 *
 * VistaBusqueda element.
 *
 * @customElement
 * @polymer
 */
class VistaBusqueda extends PolymerElement {

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
        return 'vista-busqueda';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaBusqueda.is, VistaBusqueda);
