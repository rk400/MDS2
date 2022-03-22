package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-estilos-mas-frecuentes template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-estilos-mas-frecuentes")
@JsModule("./src/vista-estilos-mas-frecuentes.js")
public class VistaEstilosMasFrecuentes extends PolymerTemplate<VistaEstilosMasFrecuentes.VistaEstilosMasFrecuentesModel> {

    /**
     * Creates a new VistaEstilosMasFrecuentes.
     */
    public VistaEstilosMasFrecuentes() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaEstilosMasFrecuentes and vista-estilos-mas-frecuentes
     */
    public interface VistaEstilosMasFrecuentesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
