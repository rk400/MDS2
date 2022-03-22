package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-ver-notificaciones template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-ver-notificaciones")
@JsModule("./src/vista-ver-notificaciones.js")
public class VistaVerNotificaciones extends PolymerTemplate<VistaVerNotificaciones.VistaVerNotificacionesModel> {

    /**
     * Creates a new VistaVerNotificaciones.
     */
    public VistaVerNotificaciones() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaVerNotificaciones and vista-ver-notificaciones
     */
    public interface VistaVerNotificacionesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
