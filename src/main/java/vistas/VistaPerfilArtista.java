package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-perfil-artista template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-perfil-artista")
@JsModule("./src/vista-perfil-artista.js")
public class VistaPerfilArtista extends PolymerTemplate<VistaPerfilArtista.VistaPerfilArtistaModel> {

    /**
     * Creates a new VistaPerfilArtista.
     */
    public VistaPerfilArtista() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPerfilArtista and vista-perfil-artista
     */
    public interface VistaPerfilArtistaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
