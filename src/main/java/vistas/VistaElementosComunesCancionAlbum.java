package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-elementos-comunes-cancion-album template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-elementos-comunes-cancion-album")
@JsModule("./src/vista-elementos-comunes-cancion-album.js")
public class VistaElementosComunesCancionAlbum extends PolymerTemplate<VistaElementosComunesCancionAlbum.VistaElementosComunesCancionAlbumModel> {

    /**
     * Creates a new VistaElementosComunesCancionAlbum.
     */
    public VistaElementosComunesCancionAlbum() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaElementosComunesCancionAlbum and vista-elementos-comunes-cancion-album
     */
    public interface VistaElementosComunesCancionAlbumModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
