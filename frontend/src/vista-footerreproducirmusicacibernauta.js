import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-footerreproducirmusicacibernauta`
 *
 * VistaFooterreproducirmusicacibernauta element.
 *
 * @customElement
 * @polymer
 */
class VistaFooterreproducirmusicacibernauta extends PolymerElement {

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
        return 'vista-footerreproducirmusicacibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaFooterreproducirmusicacibernauta.is, VistaFooterreproducirmusicacibernauta);
