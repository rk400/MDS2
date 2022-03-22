package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-canciones template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-canciones")
@JsModule("./src/vista-canciones.js")
public class VistaCanciones extends PolymerTemplate<VistaCanciones.VistaCancionesModel> {

    /**
     * Creates a new VistaCanciones.
     */
    public VistaCanciones() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCanciones and vista-canciones
     */
    public interface VistaCancionesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
