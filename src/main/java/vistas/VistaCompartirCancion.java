package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-compartir-cancion template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-compartir-cancion")
@JsModule("./src/vista-compartir-cancion.js")
public class VistaCompartirCancion extends PolymerTemplate<VistaCompartirCancion.VistaCompartirCancionModel> {

    /**
     * Creates a new VistaCompartirCancion.
     */
    public VistaCompartirCancion() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCompartirCancion and vista-compartir-cancion
     */
    public interface VistaCompartirCancionModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
