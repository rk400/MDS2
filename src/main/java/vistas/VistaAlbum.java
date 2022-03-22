package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-album template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-album")
@JsModule("./src/vista-album.js")
public class VistaAlbum extends PolymerTemplate<VistaAlbum.VistaAlbumModel> {

    /**
     * Creates a new VistaAlbum.
     */
    public VistaAlbum() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaAlbum and vista-album
     */
    public interface VistaAlbumModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
