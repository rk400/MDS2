package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-configuracion template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-configuracion")
@JsModule("./src/vista-configuracion.js")
public class VistaConfiguracion extends PolymerTemplate<VistaConfiguracion.VistaConfiguracionModel> {

    /**
     * Creates a new VistaConfiguracion.
     */
    public VistaConfiguracion() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaConfiguracion and vista-configuracion
     */
    public interface VistaConfiguracionModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
