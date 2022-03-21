package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-modificar-album template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-modificar-album")
@JsModule("./src/vista-modificar-album.js")
public class VistaModificarAlbum extends PolymerTemplate<VistaModificarAlbum.VistaModificarAlbumModel> {

    /**
     * Creates a new VistaModificarAlbum.
     */
    public VistaModificarAlbum() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaModificarAlbum and vista-modificar-album
     */
    public interface VistaModificarAlbumModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
