package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-seleccionar-estilo template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-seleccionar-estilo")
@JsModule("./src/vista-seleccionar-estilo.js")
public class VistaSeleccionarEstilo extends PolymerTemplate<VistaSeleccionarEstilo.VistaSeleccionarEstiloModel> {

    /**
     * Creates a new VistaSeleccionarEstilo.
     */
    public VistaSeleccionarEstilo() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaSeleccionarEstilo and vista-seleccionar-estilo
     */
    public interface VistaSeleccionarEstiloModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
