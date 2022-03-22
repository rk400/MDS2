package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-estilo-similar template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-estilo-similar")
@JsModule("./src/vista-estilo-similar.js")
public class VistaEstiloSimilar extends PolymerTemplate<VistaEstiloSimilar.VistaEstiloSimilarModel> {

    /**
     * Creates a new VistaEstiloSimilar.
     */
    public VistaEstiloSimilar() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaEstiloSimilar and vista-estilo-similar
     */
    public interface VistaEstiloSimilarModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
