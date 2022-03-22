import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-listas-que-participa`
 *
 * VistaListasQueParticipa element.
 *
 * @customElement
 * @polymer
 */
class VistaListasQueParticipa extends PolymerElement {

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
        return 'vista-listas-que-participa';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListasQueParticipa.is, VistaListasQueParticipa);
