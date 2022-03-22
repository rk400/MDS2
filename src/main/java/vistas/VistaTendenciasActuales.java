package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-tendencias-actuales template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-tendencias-actuales")
@JsModule("./src/vista-tendencias-actuales.js")
public class VistaTendenciasActuales extends PolymerTemplate<VistaTendenciasActuales.VistaTendenciasActualesModel> {

    /**
     * Creates a new VistaTendenciasActuales.
     */
    public VistaTendenciasActuales() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaTendenciasActuales and vista-tendencias-actuales
     */
    public interface VistaTendenciasActualesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
