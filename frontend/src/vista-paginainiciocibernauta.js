import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-paginainiciocibernauta`
 *
 * VistaPaginainiciocibernauta element.
 *
 * @customElement
 * @polymer
 */
class VistaPaginainiciocibernauta extends PolymerElement {

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
        return 'vista-paginainiciocibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPaginainiciocibernauta.is, VistaPaginainiciocibernauta);
