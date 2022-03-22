package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-elementos-comunes-user-externo template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-elementos-comunes-user-externo")
@JsModule("./src/vista-elementos-comunes-user-externo.js")
public class VistaElementosComunesUserExterno extends PolymerTemplate<VistaElementosComunesUserExterno.VistaElementosComunesUserExternoModel> {

    /**
     * Creates a new VistaElementosComunesUserExterno.
     */
    public VistaElementosComunesUserExterno() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaElementosComunesUserExterno and vista-elementos-comunes-user-externo
     */
    public interface VistaElementosComunesUserExternoModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
