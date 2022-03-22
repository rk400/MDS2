package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-cancion-preferida template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cancion-preferida")
@JsModule("./src/vista-cancion-preferida.js")
public class VistaCancionPreferida extends PolymerTemplate<VistaCancionPreferida.VistaCancionPreferidaModel> {

    /**
     * Creates a new VistaCancionPreferida.
     */
    public VistaCancionPreferida() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCancionPreferida and vista-cancion-preferida
     */
    public interface VistaCancionPreferidaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
