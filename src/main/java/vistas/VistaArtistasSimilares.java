package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-artistas-similares template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-artistas-similares")
@JsModule("./src/vista-artistas-similares.js")
public class VistaArtistasSimilares extends PolymerTemplate<VistaArtistasSimilares.VistaArtistasSimilaresModel> {

    /**
     * Creates a new VistaArtistasSimilares.
     */
    public VistaArtistasSimilares() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaArtistasSimilares and vista-artistas-similares
     */
    public interface VistaArtistasSimilaresModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
