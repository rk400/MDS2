package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-configuracion-artista template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-configuracion-artista")
@JsModule("./src/vista-configuracion-artista.js")
public class VistaConfiguracionArtista extends PolymerTemplate<VistaConfiguracionArtista.VistaConfiguracionArtistaModel> {

    /**
     * Creates a new VistaConfiguracionArtista.
     */
    public VistaConfiguracionArtista() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaConfiguracionArtista and vista-configuracion-artista
     */
    public interface VistaConfiguracionArtistaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
