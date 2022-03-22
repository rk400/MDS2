import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-cabecera-buscar`
 *
 * VistaCabeceraBuscar element.
 *
 * @customElement
 * @polymer
 */
class VistaCabeceraBuscar extends PolymerElement {

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
        return 'vista-cabecera-buscar';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCabeceraBuscar.is, VistaCabeceraBuscar);
