package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-lista-reproduccion-creada template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-lista-reproduccion-creada")
@JsModule("./src/vista-lista-reproduccion-creada.js")
public class VistaListaReproduccionCreada extends PolymerTemplate<VistaListaReproduccionCreada.VistaListaReproduccionCreadaModel> {

    /**
     * Creates a new VistaListaReproduccionCreada.
     */
    public VistaListaReproduccionCreada() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListaReproduccionCreada and vista-lista-reproduccion-creada
     */
    public interface VistaListaReproduccionCreadaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
