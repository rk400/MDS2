package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-lista-frecuente template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-lista-frecuente")
@JsModule("./src/vista-lista-frecuente.js")
public class VistaListaFrecuente extends PolymerTemplate<VistaListaFrecuente.VistaListaFrecuenteModel> {

    /**
     * Creates a new VistaListaFrecuente.
     */
    public VistaListaFrecuente() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListaFrecuente and vista-lista-frecuente
     */
    public interface VistaListaFrecuenteModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
