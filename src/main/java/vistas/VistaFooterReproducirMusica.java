package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-footerreproducirmusica template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-footerreproducirmusica")
@JsModule("./src/vista-footerreproducirmusica.js")
public class VistaFooterReproducirMusica extends PolymerTemplate<VistaFooterReproducirMusica.VistaFooterReproducirMusicaModel> {

    /**
     * Creates a new VistaFooterReproducirMusica.
     */
    public VistaFooterReproducirMusica() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaFooterReproducirMusica and vista-footerreproducirmusica
     */
    public interface VistaFooterReproducirMusicaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
