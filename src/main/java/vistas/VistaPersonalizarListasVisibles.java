package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-personalizar-listas-visibles template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-personalizar-listas-visibles")
@JsModule("./src/vista-personalizar-listas-visibles.js")
public class VistaPersonalizarListasVisibles extends PolymerTemplate<VistaPersonalizarListasVisibles.VistaPersonalizarListasVisiblesModel> {

    /**
     * Creates a new VistaPersonalizarListasVisibles.
     */
    public VistaPersonalizarListasVisibles() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPersonalizarListasVisibles and vista-personalizar-listas-visibles
     */
    public interface VistaPersonalizarListasVisiblesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
