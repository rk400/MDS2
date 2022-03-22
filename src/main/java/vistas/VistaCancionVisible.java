package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-cancion-visible template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cancion-visible")
@JsModule("./src/vista-cancion-visible.js")
public class VistaCancionVisible extends PolymerTemplate<VistaCancionVisible.VistaCancionVisibleModel> {

    /**
     * Creates a new VistaCancionVisible.
     */
    public VistaCancionVisible() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCancionVisible and vista-cancion-visible
     */
    public interface VistaCancionVisibleModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
