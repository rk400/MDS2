package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-cancion-popular template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cancion-popular")
@JsModule("./src/vista-cancion-popular.js")
public class VistaCancionPopular extends PolymerTemplate<VistaCancionPopular.VistaCancionPopularModel> {

    /**
     * Creates a new VistaCancionPopular.
     */
    public VistaCancionPopular() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCancionPopular and vista-cancion-popular
     */
    public interface VistaCancionPopularModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
