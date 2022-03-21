package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-modificar-elementos template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-modificar-elementos")
@JsModule("./src/vista-modificar-elementos.js")
public class VistaModificarElementos extends PolymerTemplate<VistaModificarElementos.VistaModificarElementosModel> {

    /**
     * Creates a new VistaModificarElementos.
     */
    public VistaModificarElementos() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaModificarElementos and vista-modificar-elementos
     */
    public interface VistaModificarElementosModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
