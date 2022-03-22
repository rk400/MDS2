package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-mostrar-creditos template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-mostrar-creditos")
@JsModule("./src/vista-mostrar-creditos.js")
public class VistaMostrarCreditos extends PolymerTemplate<VistaMostrarCreditos.VistaMostrarCreditosModel> {

    /**
     * Creates a new VistaMostrarCreditos.
     */
    public VistaMostrarCreditos() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaMostrarCreditos and vista-mostrar-creditos
     */
    public interface VistaMostrarCreditosModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
