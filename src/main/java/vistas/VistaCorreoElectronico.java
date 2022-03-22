package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-correo-electronico template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-correo-electronico")
@JsModule("./src/vista-correo-electronico.js")
public class VistaCorreoElectronico extends PolymerTemplate<VistaCorreoElectronico.VistaCorreoElectronicoModel> {

    /**
     * Creates a new VistaCorreoElectronico.
     */
    public VistaCorreoElectronico() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCorreoElectronico and vista-correo-electronico
     */
    public interface VistaCorreoElectronicoModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
