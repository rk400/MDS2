package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-cabecera-administrador template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cabecera-administrador")
@JsModule("./src/vista-cabecera-administrador.js")
public class VistaCabeceraAdministrador extends PolymerTemplate<VistaCabeceraAdministrador.VistaCabeceraAdministradorModel> {

    /**
     * Creates a new VistaCabeceraAdministrador.
     */
    public VistaCabeceraAdministrador() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCabeceraAdministrador and vista-cabecera-administrador
     */
    public interface VistaCabeceraAdministradorModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
