import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-footerreproducirmusica`
 *
 * VistaFooterreproducirmusica element.
 *
 * @customElement
 * @polymer
 */
class VistaFooterreproducirmusica extends PolymerElement {

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
        return 'vista-footerreproducirmusica';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaFooterreproducirmusica.is, VistaFooterreproducirmusica);
