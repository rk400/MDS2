package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-estilo template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-estilo")
@JsModule("./src/vista-estilo.js")
public class VistaEstilo extends PolymerTemplate<VistaEstilo.VistaEstiloModel> {

    /**
     * Creates a new VistaEstilo.
     */
    public VistaEstilo() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaEstilo and vista-estilo
     */
    public interface VistaEstiloModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
