package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-listas-mas-frecuentes template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-listas-mas-frecuentes")
@JsModule("./src/vista-listas-mas-frecuentes.js")
public class VistaListasMasFrecuentes extends PolymerTemplate<VistaListasMasFrecuentes.VistaListasMasFrecuentesModel> {

    /**
     * Creates a new VistaListasMasFrecuentes.
     */
    public VistaListasMasFrecuentes() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListasMasFrecuentes and vista-listas-mas-frecuentes
     */
    public interface VistaListasMasFrecuentesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
