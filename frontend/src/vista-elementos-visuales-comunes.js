import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-elementos-visuales-comunes`
 *
 * VistaElementosVisualesComunes element.
 *
 * @customElement
 * @polymer
 */
class VistaElementosVisualesComunes extends PolymerElement {

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
        return 'vista-elementos-visuales-comunes';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElementosVisualesComunes.is, VistaElementosVisualesComunes);
