package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-anadir-artistas template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-anadir-artistas")
@JsModule("./src/vista-anadir-artistas.js")
public class VistaAnadirArtistas extends PolymerTemplate<VistaAnadirArtistas.VistaAnadirArtistasModel> {

    /**
     * Creates a new VistaAnadirArtistas.
     */
    public VistaAnadirArtistas() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaAnadirArtistas and vista-anadir-artistas
     */
    public interface VistaAnadirArtistasModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
