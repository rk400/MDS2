import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-listas-mas-frecuentes`
 *
 * VistaListasMasFrecuentes element.
 *
 * @customElement
 * @polymer
 */
class VistaListasMasFrecuentes extends PolymerElement {

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
        return 'vista-listas-mas-frecuentes';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaListasMasFrecuentes.is, VistaListasMasFrecuentes);
