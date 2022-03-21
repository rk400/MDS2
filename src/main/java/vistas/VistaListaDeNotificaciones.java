package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-lista-de-notificaciones template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-lista-de-notificaciones")
@JsModule("./src/vista-lista-de-notificaciones.js")
public class VistaListaDeNotificaciones extends PolymerTemplate<VistaListaDeNotificaciones.VistaListaDeNotificacionesModel> {

    /**
     * Creates a new VistaListaDeNotificaciones.
     */
    public VistaListaDeNotificaciones() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaListaDeNotificaciones and vista-lista-de-notificaciones
     */
    public interface VistaListaDeNotificacionesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
