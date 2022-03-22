package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-lista-mas-frecuente template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-lista-mas-frecuente")
@JsModule("./src/vista-lista-mas-frecuente.js")
public class VistaListaMasFrecuente extends PolymerTemplate<VistaListaMasFrecuente.VistaListaMasFrecuenteModel> {

    /**
     * Creates a new VistaListaMasFrecuente.
     */
    public VistaListaMasFrecuente() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListaMasFrecuente and vista-lista-mas-frecuente
     */
    public interface VistaListaMasFrecuenteModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
