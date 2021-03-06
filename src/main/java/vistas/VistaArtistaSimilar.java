package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-artista-similar template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-artista-similar")
@JsModule("./src/vista-artista-similar.js")
public class VistaArtistaSimilar extends PolymerTemplate<VistaArtistaSimilar.VistaArtistaSimilarModel> {

    /**
     * Creates a new VistaArtistaSimilar.
     */
    public VistaArtistaSimilar() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaArtistaSimilar and vista-artista-similar
     */
    public interface VistaArtistaSimilarModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
