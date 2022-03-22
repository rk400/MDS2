package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-artista-similar-anadir template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-artista-similar-anadir")
@JsModule("./src/vista-artista-similar-anadir.js")
public class VistaArtistaSimilarAnadir extends PolymerTemplate<VistaArtistaSimilarAnadir.VistaArtistaSimilarAnadirModel> {

    /**
     * Creates a new VistaArtistaSimilarAnadir.
     */
    public VistaArtistaSimilarAnadir() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaArtistaSimilarAnadir and vista-artista-similar-anadir
     */
    public interface VistaArtistaSimilarAnadirModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
