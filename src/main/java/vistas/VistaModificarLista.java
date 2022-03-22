package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-modificar-lista template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-modificar-lista")
@JsModule("./src/vista-modificar-lista.js")
public class VistaModificarLista extends PolymerTemplate<VistaModificarLista.VistaModificarListaModel> {

    /**
     * Creates a new VistaModificarLista.
     */
    public VistaModificarLista() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaModificarLista and vista-modificar-lista
     */
    public interface VistaModificarListaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
