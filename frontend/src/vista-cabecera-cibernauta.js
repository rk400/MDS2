import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-cabecera-cibernauta`
 *
 * VistaCabeceraCibernauta element.
 *
 * @customElement
 * @polymer
 */
class VistaCabeceraCibernauta extends PolymerElement {

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
        return 'vista-cabecera-cibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCabeceraCibernauta.is, VistaCabeceraCibernauta);
