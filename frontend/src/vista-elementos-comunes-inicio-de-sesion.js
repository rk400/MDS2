import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `vista-elementos-comunes-inicio-de-sesion`
 *
 * VistaElementosComunesInicioDeSesion element.
 *
 * @customElement
 * @polymer
 */
class VistaElementosComunesInicioDeSesion extends PolymerElement {

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
        return 'vista-elementos-comunes-inicio-de-sesion';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaElementosComunesInicioDeSesion.is, VistaElementosComunesInicioDeSesion);
