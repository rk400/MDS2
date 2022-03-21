package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-mostrar-menu-seleccion template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-mostrar-menu-seleccion")
@JsModule("./src/vista-mostrar-menu-seleccion.js")
public class VistaMostrarMenuSeleccion extends PolymerTemplate<VistaMostrarMenuSeleccion.VistaMostrarMenuSeleccionModel> {

    /**
     * Creates a new VistaMostrarMenuSeleccion.
     */
    public VistaMostrarMenuSeleccion() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaMostrarMenuSeleccion and vista-mostrar-menu-seleccion
     */
    public interface VistaMostrarMenuSeleccionModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
