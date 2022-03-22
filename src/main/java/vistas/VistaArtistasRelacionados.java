package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-artistas-relacionados template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-artistas-relacionados")
@JsModule("./src/vista-artistas-relacionados.js")
public class VistaArtistasRelacionados extends PolymerTemplate<VistaArtistasRelacionados.VistaArtistasRelacionadosModel> {

    /**
     * Creates a new VistaArtistasRelacionados.
     */
    public VistaArtistasRelacionados() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaArtistasRelacionados and vista-artistas-relacionados
     */
    public interface VistaArtistasRelacionadosModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
