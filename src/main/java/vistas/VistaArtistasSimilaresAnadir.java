package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-artistas-similares-anadir template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-artistas-similares-anadir")
@JsModule("./src/vista-artistas-similares-anadir.js")
public class VistaArtistasSimilaresAnadir extends PolymerTemplate<VistaArtistasSimilaresAnadir.VistaArtistasSimilaresAnadirModel> {

    /**
     * Creates a new VistaArtistasSimilaresAnadir.
     */
    public VistaArtistasSimilaresAnadir() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaArtistasSimilaresAnadir and vista-artistas-similares-anadir
     */
    public interface VistaArtistasSimilaresAnadirModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
