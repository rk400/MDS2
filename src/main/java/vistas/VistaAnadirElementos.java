package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-anadir-elementos template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-anadir-elementos")
@JsModule("./src/vista-anadir-elementos.js")
public class VistaAnadirElementos extends PolymerTemplate<VistaAnadirElementos.VistaAnadirElementosModel> {

    /**
     * Creates a new VistaAnadirElementos.
     */
    public VistaAnadirElementos() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaAnadirElementos and vista-anadir-elementos
     */
    public interface VistaAnadirElementosModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
