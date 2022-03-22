package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-modificar-artista template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-modificar-artista")
@JsModule("./src/vista-modificar-artista.js")
public class VistaModificarArtista extends PolymerTemplate<VistaModificarArtista.VistaModificarArtistaModel> {

    /**
     * Creates a new VistaModificarArtista.
     */
    public VistaModificarArtista() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaModificarArtista and vista-modificar-artista
     */
    public interface VistaModificarArtistaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
