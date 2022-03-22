package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-tendencia-actual template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-tendencia-actual")
@JsModule("./src/vista-tendencia-actual.js")
public class VistaTendenciaActual extends PolymerTemplate<VistaTendenciaActual.VistaTendenciaActualModel> {

    /**
     * Creates a new VistaTendenciaActual.
     */
    public VistaTendenciaActual() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaTendenciaActual and vista-tendencia-actual
     */
    public interface VistaTendenciaActualModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
