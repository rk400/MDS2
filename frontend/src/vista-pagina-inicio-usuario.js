import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-pagina-inicio-usuario`
 *
 * VistaPaginaInicioUsuario element.
 *
 * @customElement
 * @polymer
 */
class VistaPaginaInicioUsuario extends PolymerElement {

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
        return 'vista-pagina-inicio-usuario';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPaginaInicioUsuario.is, VistaPaginaInicioUsuario);
