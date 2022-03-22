package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-crear-lista template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-crear-lista")
@JsModule("./src/vista-crear-lista.js")
public class VistaCrearLista extends PolymerTemplate<VistaCrearLista.VistaCrearListaModel> {

    /**
     * Creates a new VistaCrearLista.
     */
    public VistaCrearLista() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCrearLista and vista-crear-lista
     */
    public interface VistaCrearListaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
