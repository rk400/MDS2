package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-seleccionar-album template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-seleccionar-album")
@JsModule("./src/vista-seleccionar-album.js")
public class VistaSeleccionarAlbum extends PolymerTemplate<VistaSeleccionarAlbum.VistaSeleccionarAlbumModel> {

    /**
     * Creates a new VistaSeleccionarAlbum.
     */
    public VistaSeleccionarAlbum() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaSeleccionarAlbum and vista-seleccionar-album
     */
    public interface VistaSeleccionarAlbumModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
