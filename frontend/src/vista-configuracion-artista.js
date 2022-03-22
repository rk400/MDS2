import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-configuracion-artista`
 *
 * VistaConfiguracionArtista element.
 *
 * @customElement
 * @polymer
 */
class VistaConfiguracionArtista extends PolymerElement {

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
        return 'vista-configuracion-artista';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaConfiguracionArtista.is, VistaConfiguracionArtista);
