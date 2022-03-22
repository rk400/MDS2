package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-cabecera-buscar template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cabecera-buscar")
@JsModule("./src/vista-cabecera-buscar.js")
public class VistaCabeceraBuscar extends PolymerTemplate<VistaCabeceraBuscar.VistaCabeceraBuscarModel> {

    /**
     * Creates a new VistaCabeceraBuscar.
     */
    public VistaCabeceraBuscar() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCabeceraBuscar and vista-cabecera-buscar
     */
    public interface VistaCabeceraBuscarModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
