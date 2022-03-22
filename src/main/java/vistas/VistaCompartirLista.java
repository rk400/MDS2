package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-compartir-lista template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-compartir-lista")
@JsModule("./src/vista-compartir-lista.js")
public class VistaCompartirLista extends PolymerTemplate<VistaCompartirLista.VistaCompartirListaModel> {

    /**
     * Creates a new VistaCompartirLista.
     */
    public VistaCompartirLista() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCompartirLista and vista-compartir-lista
     */
    public interface VistaCompartirListaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
