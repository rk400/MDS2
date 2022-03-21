import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-lista-que-participa`
 *
 * VistaListaQueParticipa element.
 *
 * @customElement
 * @polymer
 */
class VistaListaQueParticipa extends PolymerElement {

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
        return 'vista-lista-que-participa';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListaQueParticipa.is, VistaListaQueParticipa);
