import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './vista-cancion.js';

class VistaCancionPreferida extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vista-cancion></vista-cancion>
`;
    }

    static get is() {
        return 'vista-cancion-preferida';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionPreferida.is, VistaCancionPreferida);
