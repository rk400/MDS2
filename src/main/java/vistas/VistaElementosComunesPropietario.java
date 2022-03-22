package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-elementos-comunes-propietario template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-elementos-comunes-propietario")
@JsModule("./src/vista-elementos-comunes-propietario.js")
public class VistaElementosComunesPropietario extends PolymerTemplate<VistaElementosComunesPropietario.VistaElementosComunesPropietarioModel> {

    /**
     * Creates a new VistaElementosComunesPropietario.
     */
    public VistaElementosComunesPropietario() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaElementosComunesPropietario and vista-elementos-comunes-propietario
     */
    public interface VistaElementosComunesPropietarioModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
