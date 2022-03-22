package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-vista-usuario-artista template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-vista-usuario-artista")
@JsModule("./src/vista-vista-usuario-artista.js")
public class VistaVistaUsuarioArtista extends PolymerTemplate<VistaVistaUsuarioArtista.VistaVistaUsuarioArtistaModel> {

    /**
     * Creates a new VistaVistaUsuarioArtista.
     */
    public VistaVistaUsuarioArtista() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaVistaUsuarioArtista and vista-vista-usuario-artista
     */
    public interface VistaVistaUsuarioArtistaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
