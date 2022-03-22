import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-reproducir-musica`
 *
 * VistaReproducirMusica element.
 *
 * @customElement
 * @polymer
 */
class VistaReproducirMusica extends PolymerElement {

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
        return 'vista-reproducir-musica';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaReproducirMusica.is, VistaReproducirMusica);
