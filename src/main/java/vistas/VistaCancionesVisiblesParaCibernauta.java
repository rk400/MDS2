package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-canciones-visibles-para-cibernauta template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-canciones-visibles-para-cibernauta")
@JsModule("./src/vista-canciones-visibles-para-cibernauta.js")
public class VistaCancionesVisiblesParaCibernauta extends PolymerTemplate<VistaCancionesVisiblesParaCibernauta.VistaCancionesVisiblesParaCibernautaModel> {

    /**
     * Creates a new VistaCancionesVisiblesParaCibernauta.
     */
    public VistaCancionesVisiblesParaCibernauta() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCancionesVisiblesParaCibernauta and vista-canciones-visibles-para-cibernauta
     */
    public interface VistaCancionesVisiblesParaCibernautaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
