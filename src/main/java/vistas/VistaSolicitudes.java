package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-solicitudes template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-solicitudes")
@JsModule("./src/vista-solicitudes.js")
public class VistaSolicitudes extends PolymerTemplate<VistaSolicitudes.VistaSolicitudesModel> {

    /**
     * Creates a new VistaSolicitudes.
     */
    public VistaSolicitudes() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaSolicitudes and vista-solicitudes
     */
    public interface VistaSolicitudesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
