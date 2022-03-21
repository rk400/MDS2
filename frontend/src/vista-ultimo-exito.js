import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-ultimo-exito`
 *
 * VistaUltimoExito element.
 *
 * @customElement
 * @polymer
 */
class VistaUltimoExito extends PolymerElement {

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
        return 'vista-ultimo-exito';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaUltimoExito.is, VistaUltimoExito);
