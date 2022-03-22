import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-elementos-recomendados`
 *
 * VistaElementosRecomendados element.
 *
 * @customElement
 * @polymer
 */
class VistaElementosRecomendados extends PolymerElement {

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
        return 'vista-elementos-recomendados';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElementosRecomendados.is, VistaElementosRecomendados);
