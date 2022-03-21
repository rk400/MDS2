package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-perfil-usuario-u-externo template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-perfil-usuario-u-externo")
@JsModule("./src/vista-perfil-usuario-u-externo.js")
public class VistaPerfilUsuarioUExterno extends PolymerTemplate<VistaPerfilUsuarioUExterno.VistaPerfilUsuarioUExternoModel> {

    /**
     * Creates a new VistaPerfilUsuarioUExterno.
     */
    public VistaPerfilUsuarioUExterno() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPerfilUsuarioUExterno and vista-perfil-usuario-u-externo
     */
    public interface VistaPerfilUsuarioUExternoModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
