package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-compartir-album template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-compartir-album")
@JsModule("./src/vista-compartir-album.js")
public class VistaCompartirAlbum extends PolymerTemplate<VistaCompartirAlbum.VistaCompartirAlbumModel> {

    /**
     * Creates a new VistaCompartirAlbum.
     */
    public VistaCompartirAlbum() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCompartirAlbum and vista-compartir-album
     */
    public interface VistaCompartirAlbumModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
