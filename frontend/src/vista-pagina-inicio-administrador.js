import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-pagina-inicio-administrador`
 *
 * VistaPaginaInicioAdministrador element.
 *
 * @customElement
 * @polymer
 */
class VistaPaginaInicioAdministrador extends PolymerElement {

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
        return 'vista-pagina-inicio-administrador';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPaginaInicioAdministrador.is, VistaPaginaInicioAdministrador);
