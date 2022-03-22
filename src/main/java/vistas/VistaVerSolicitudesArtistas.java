package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-ver-solicitudes-artistas template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-ver-solicitudes-artistas")
@JsModule("./src/vista-ver-solicitudes-artistas.js")
public class VistaVerSolicitudesArtistas extends PolymerTemplate<VistaVerSolicitudesArtistas.VistaVerSolicitudesArtistasModel> {

    /**
     * Creates a new VistaVerSolicitudesArtistas.
     */
    public VistaVerSolicitudesArtistas() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaVerSolicitudesArtistas and vista-ver-solicitudes-artistas
     */
    public interface VistaVerSolicitudesArtistasModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
