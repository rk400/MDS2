package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-elementos-visuales-comunes template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-elementos-visuales-comunes")
@JsModule("./src/vista-elementos-visuales-comunes.js")
public class VistaElementosVisualesComunes extends PolymerTemplate<VistaElementosVisualesComunes.VistaElementosVisualesComunesModel> {

    /**
     * Creates a new VistaElementosVisualesComunes.
     */
    public VistaElementosVisualesComunes() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaElementosVisualesComunes and vista-elementos-visuales-comunes
     */
    public interface VistaElementosVisualesComunesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
