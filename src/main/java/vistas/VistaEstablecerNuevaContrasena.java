package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-establecer-nueva-contrasena template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-establecer-nueva-contrasena")
@JsModule("./src/vista-establecer-nueva-contrasena.js")
public class VistaEstablecerNuevaContrasena extends PolymerTemplate<VistaEstablecerNuevaContrasena.VistaEstablecerNuevaContrasenaModel> {

    /**
     * Creates a new VistaEstablecerNuevaContrasena.
     */
    public VistaEstablecerNuevaContrasena() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaEstablecerNuevaContrasena and vista-establecer-nueva-contrasena
     */
    public interface VistaEstablecerNuevaContrasenaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
