package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-elemento template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-elemento")
@JsModule("./src/vista-elemento.js")
public class VistaElemento extends PolymerTemplate<VistaElemento.VistaElementoModel> {

    /**
     * Creates a new VistaElemento.
     */
    public VistaElemento() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaElemento and vista-elemento
     */
    public interface VistaElementoModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
