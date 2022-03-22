package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-estilos-similares template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-estilos-similares")
@JsModule("./src/vista-estilos-similares.js")
public class VistaEstilosSimilares extends PolymerTemplate<VistaEstilosSimilares.VistaEstilosSimilaresModel> {

    /**
     * Creates a new VistaEstilosSimilares.
     */
    public VistaEstilosSimilares() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaEstilosSimilares and vista-estilos-similares
     */
    public interface VistaEstilosSimilaresModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
