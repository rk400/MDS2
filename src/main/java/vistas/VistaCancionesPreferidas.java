package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-canciones-preferidas template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-canciones-preferidas")
@JsModule("./src/vista-canciones-preferidas.js")
public class VistaCancionesPreferidas extends PolymerTemplate<VistaCancionesPreferidas.VistaCancionesPreferidasModel> {

    /**
     * Creates a new VistaCancionesPreferidas.
     */
    public VistaCancionesPreferidas() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCancionesPreferidas and vista-canciones-preferidas
     */
    public interface VistaCancionesPreferidasModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
