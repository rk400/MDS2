package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-listas-que-participa template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-listas-que-participa")
@JsModule("./src/vista-listas-que-participa.js")
public class VistaListasQueParticipa extends PolymerTemplate<VistaListasQueParticipa.VistaListasQueParticipaModel> {

    /**
     * Creates a new VistaListasQueParticipa.
     */
    public VistaListasQueParticipa() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListasQueParticipa and vista-listas-que-participa
     */
    public interface VistaListasQueParticipaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
