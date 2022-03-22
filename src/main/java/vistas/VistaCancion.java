package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-cancion template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cancion")
@JsModule("./src/vista-cancion.js")
public class VistaCancion extends PolymerTemplate<VistaCancion.VistaCancionModel> {

    /**
     * Creates a new VistaCancion.
     */
    public VistaCancion() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCancion and vista-cancion
     */
    public interface VistaCancionModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
