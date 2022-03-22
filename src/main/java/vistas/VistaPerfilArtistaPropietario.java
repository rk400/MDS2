package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-perfil-artista-propietario template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-perfil-artista-propietario")
@JsModule("./src/vista-perfil-artista-propietario.js")
public class VistaPerfilArtistaPropietario extends PolymerTemplate<VistaPerfilArtistaPropietario.VistaPerfilArtistaPropietarioModel> {

    /**
     * Creates a new VistaPerfilArtistaPropietario.
     */
    public VistaPerfilArtistaPropietario() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPerfilArtistaPropietario and vista-perfil-artista-propietario
     */
    public interface VistaPerfilArtistaPropietarioModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
