package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-seleccionar-canciones template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-seleccionar-canciones")
@JsModule("./src/vista-seleccionar-canciones.js")
public class VistaSeleccionarCanciones extends PolymerTemplate<VistaSeleccionarCanciones.VistaSeleccionarCancionesModel> {

    /**
     * Creates a new VistaSeleccionarCanciones.
     */
    public VistaSeleccionarCanciones() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaSeleccionarCanciones and vista-seleccionar-canciones
     */
    public interface VistaSeleccionarCancionesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
