package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-recuperar-contrasena template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-recuperar-contrasena")
@JsModule("./src/vista-recuperar-contrasena.js")
public class VistaRecuperarContrasena extends PolymerTemplate<VistaRecuperarContrasena.VistaRecuperarContrasenaModel> {

    /**
     * Creates a new VistaRecuperarContrasena.
     */
    public VistaRecuperarContrasena() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaRecuperarContrasena and vista-recuperar-contrasena
     */
    public interface VistaRecuperarContrasenaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
