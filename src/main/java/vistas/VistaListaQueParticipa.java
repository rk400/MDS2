package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-lista-que-participa template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-lista-que-participa")
@JsModule("./src/vista-lista-que-participa.js")
public class VistaListaQueParticipa extends PolymerTemplate<VistaListaQueParticipa.VistaListaQueParticipaModel> {

    /**
     * Creates a new VistaListaQueParticipa.
     */
    public VistaListaQueParticipa() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListaQueParticipa and vista-lista-que-participa
     */
    public interface VistaListaQueParticipaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
