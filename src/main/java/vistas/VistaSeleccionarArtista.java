package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-seleccionar-artista template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-seleccionar-artista")
@JsModule("./src/vista-seleccionar-artista.js")
public class VistaSeleccionarArtista extends PolymerTemplate<VistaSeleccionarArtista.VistaSeleccionarArtistaModel> {

    /**
     * Creates a new VistaSeleccionarArtista.
     */
    public VistaSeleccionarArtista() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaSeleccionarArtista and vista-seleccionar-artista
     */
    public interface VistaSeleccionarArtistaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
