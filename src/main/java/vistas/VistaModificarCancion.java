package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-modificar-cancion template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-modificar-cancion")
@JsModule("./src/vista-modificar-cancion.js")
public class VistaModificarCancion extends PolymerTemplate<VistaModificarCancion.VistaModificarCancionModel> {

    /**
     * Creates a new VistaModificarCancion.
     */
    public VistaModificarCancion() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaModificarCancion and vista-modificar-cancion
     */
    public interface VistaModificarCancionModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
