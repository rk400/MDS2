package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-modificar-estilos template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-modificar-estilos")
@JsModule("./src/vista-modificar-estilos.js")
public class VistaModificarEstilos extends PolymerTemplate<VistaModificarEstilos.VistaModificarEstilosModel> {

    /**
     * Creates a new VistaModificarEstilos.
     */
    public VistaModificarEstilos() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaModificarEstilos and vista-modificar-estilos
     */
    public interface VistaModificarEstilosModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
