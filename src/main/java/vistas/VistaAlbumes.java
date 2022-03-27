package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-albumes template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-albumes")
@JsModule("./src/vista-albumes.js")
public class VistaAlbumes extends PolymerTemplate<VistaAlbumes.VistaAlbumesModel> {

    /**
     * Creates a new VistaAlbumes.
     */
    public VistaAlbumes() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaAlbumes and vista-albumes
     */
    public interface VistaAlbumesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
