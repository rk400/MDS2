package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-perfil-u-externo template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-perfil-u-externo")
@JsModule("./src/vista-perfil-u-externo.js")
public class VistaPerfilUExterno extends PolymerTemplate<VistaPerfilUExterno.VistaPerfilUExternoModel> {

    /**
     * Creates a new VistaPerfilUExterno.
     */
    public VistaPerfilUExterno() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPerfilUExterno and vista-perfil-u-externo
     */
    public interface VistaPerfilUExternoModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
