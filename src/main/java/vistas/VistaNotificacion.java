package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-notificacion template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-notificacion")
@JsModule("./src/vista-notificacion.js")
public class VistaNotificacion extends PolymerTemplate<VistaNotificacion.VistaNotificacionModel> {

    /**
     * Creates a new VistaNotificacion.
     */
    public VistaNotificacion() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaNotificacion and vista-notificacion
     */
    public interface VistaNotificacionModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
