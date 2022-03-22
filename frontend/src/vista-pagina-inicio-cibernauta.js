import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-pagina-inicio-cibernauta`
 *
 * VistaPaginaInicioCibernauta element.
 *
 * @customElement
 * @polymer
 */
class VistaPaginaInicioCibernauta extends PolymerElement {

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
        return 'vista-pagina-inicio-cibernauta';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaPaginaInicioCibernauta.is, VistaPaginaInicioCibernauta);
