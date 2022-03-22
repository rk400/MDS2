package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-listas-reproduccion template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-listas-reproduccion")
@JsModule("./src/vista-listas-reproduccion.js")
public class VistaListasReproduccion extends PolymerTemplate<VistaListasReproduccion.VistaListasReproduccionModel> {

    /**
     * Creates a new VistaListasReproduccion.
     */
    public VistaListasReproduccion() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListasReproduccion and vista-listas-reproduccion
     */
    public interface VistaListasReproduccionModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
