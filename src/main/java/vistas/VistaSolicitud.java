package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-solicitud template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-solicitud")
@JsModule("./src/vista-solicitud.js")
public class VistaSolicitud extends PolymerTemplate<VistaSolicitud.VistaSolicitudModel> {

    /**
     * Creates a new VistaSolicitud.
     */
    public VistaSolicitud() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaSolicitud and vista-solicitud
     */
    public interface VistaSolicitudModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
