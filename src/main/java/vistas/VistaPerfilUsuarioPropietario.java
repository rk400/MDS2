package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-perfil-usuario-propietario template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-perfil-usuario-propietario")
@JsModule("./src/vista-perfil-usuario-propietario.js")
public class VistaPerfilUsuarioPropietario extends PolymerTemplate<VistaPerfilUsuarioPropietario.VistaPerfilUsuarioPropietarioModel> {

    /**
     * Creates a new VistaPerfilUsuarioPropietario.
     */
    public VistaPerfilUsuarioPropietario() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPerfilUsuarioPropietario and vista-perfil-usuario-propietario
     */
    public interface VistaPerfilUsuarioPropietarioModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
