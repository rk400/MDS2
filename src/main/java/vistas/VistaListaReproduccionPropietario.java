package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-lista-reproduccion-propietario template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-lista-reproduccion-propietario")
@JsModule("./src/vista-lista-reproduccion-propietario.js")
public class VistaListaReproduccionPropietario extends PolymerTemplate<VistaListaReproduccionPropietario.VistaListaReproduccionPropietarioModel> {

    /**
     * Creates a new VistaListaReproduccionPropietario.
     */
    public VistaListaReproduccionPropietario() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListaReproduccionPropietario and vista-lista-reproduccion-propietario
     */
    public interface VistaListaReproduccionPropietarioModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
