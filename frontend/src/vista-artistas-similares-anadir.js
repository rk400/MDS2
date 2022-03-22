import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-artistas-similares-anadir`
 *
 * VistaArtistasSimilaresAnadir element.
 *
 * @customElement
 * @polymer
 */
class VistaArtistasSimilaresAnadir extends PolymerElement {

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
        return 'vista-artistas-similares-anadir';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaArtistasSimilaresAnadir.is, VistaArtistasSimilaresAnadir);
