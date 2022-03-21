package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-usuario template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-usuario")
@JsModule("./src/vista-usuario.js")
public class VistaUsuario extends PolymerTemplate<VistaUsuario.VistaUsuarioModel> {

    /**
     * Creates a new VistaUsuario.
     */
    public VistaUsuario() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaUsuario and vista-usuario
     */
    public interface VistaUsuarioModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
