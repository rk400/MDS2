import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-footer-reproducir-musica`
 *
 * VistaFooterReproducirMusica element.
 *
 * @customElement
 * @polymer
 */
class VistaFooterReproducirMusica extends PolymerElement {

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
        return 'vista-footer-reproducir-musica';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaFooterReproducirMusica.is, VistaFooterReproducirMusica);
