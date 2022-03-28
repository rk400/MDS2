import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './vista-cancion.js';

class VistaCancionPopular extends PolymerElement {

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
        return 'vista-cancion-popular';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(VistaCancionPopular.is, VistaCancionPopular);
