package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-artistas-mas-escuchados template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-artistas-mas-escuchados")
@JsModule("./src/vista-artistas-mas-escuchados.js")
public class VistaArtistasMasEscuchados extends PolymerTemplate<VistaArtistasMasEscuchados.VistaArtistasMasEscuchadosModel> {

    /**
     * Creates a new VistaArtistasMasEscuchados.
     */
    public VistaArtistasMasEscuchados() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaArtistasMasEscuchados and vista-artistas-mas-escuchados
     */
    public interface VistaArtistasMasEscuchadosModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
