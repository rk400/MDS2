package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-anadir-albumes template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-anadir-albumes")
@JsModule("./src/vista-anadir-albumes.js")
public class VistaAnadirAlbumes extends PolymerTemplate<VistaAnadirAlbumes.VistaAnadirAlbumesModel> {

    /**
     * Creates a new VistaAnadirAlbumes.
     */
    public VistaAnadirAlbumes() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaAnadirAlbumes and vista-anadir-albumes
     */
    public interface VistaAnadirAlbumesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
