package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-cancion-administrador template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cancion-administrador")
@JsModule("./src/vista-cancion-administrador.js")
public class VistaCancionAdministrador extends PolymerTemplate<VistaCancionAdministrador.VistaCancionAdministradorModel> {

    /**
     * Creates a new VistaCancionAdministrador.
     */
    public VistaCancionAdministrador() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCancionAdministrador and vista-cancion-administrador
     */
    public interface VistaCancionAdministradorModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
