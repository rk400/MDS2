import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-footer-reproducir-musica-cibernauta`
 *
 * VistaFooterReproducirMusicaCibernauta element.
 *
 * @customElement
 * @polymer
 */
class VistaFooterReproducirMusicaCibernauta extends PolymerElement {

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
        return 'vista-footer-reproducir-musica-cibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaFooterReproducirMusicaCibernauta.is, VistaFooterReproducirMusicaCibernauta);
