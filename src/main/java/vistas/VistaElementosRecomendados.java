package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-elementos-recomendados template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-elementos-recomendados")
@JsModule("./src/vista-elementos-recomendados.js")
public class VistaElementosRecomendados extends PolymerTemplate<VistaElementosRecomendados.VistaElementosRecomendadosModel> {

    /**
     * Creates a new VistaElementosRecomendados.
     */
    public VistaElementosRecomendados() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaElementosRecomendados and vista-elementos-recomendados
     */
    public interface VistaElementosRecomendadosModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
