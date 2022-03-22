package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-canciones-administrador template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-canciones-administrador")
@JsModule("./src/vista-canciones-administrador.js")
public class VistaCancionesAdministrador extends PolymerTemplate<VistaCancionesAdministrador.VistaCancionesAdministradorModel> {

    /**
     * Creates a new VistaCancionesAdministrador.
     */
    public VistaCancionesAdministrador() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCancionesAdministrador and vista-canciones-administrador
     */
    public interface VistaCancionesAdministradorModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
