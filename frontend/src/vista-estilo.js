import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-estilo`
 *
 * VistaEstilo element.
 *
 * @customElement
 * @polymer
 */
class VistaEstilo extends PolymerElement {

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
        return 'vista-estilo';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaEstilo.is, VistaEstilo);
