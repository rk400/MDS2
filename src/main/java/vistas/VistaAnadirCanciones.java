package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.template.Id;

/**
 * A Designer generated component for the vista-anadir-canciones template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-anadir-canciones")
@JsModule("./src/vista-anadir-canciones.js")
public class VistaAnadirCanciones extends PolymerTemplate<VistaAnadirCanciones.VistaAnadirCancionesModel> {

    /**
     * Creates a new VistaAnadirCanciones.
     */
    public VistaAnadirCanciones() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaAnadirCanciones and vista-anadir-canciones
     */
    public interface VistaAnadirCancionesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
