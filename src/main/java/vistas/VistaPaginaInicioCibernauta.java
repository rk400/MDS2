package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-pagina-inicio-cibernauta template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-pagina-inicio-cibernauta")
@JsModule("./src/vista-pagina-inicio-cibernauta.js")
public class VistaPaginaInicioCibernauta extends PolymerTemplate<VistaPaginaInicioCibernauta.VistaPaginaInicioCibernautaModel> {

    /**
     * Creates a new VistaPaginaInicioCibernauta.
     */
    public VistaPaginaInicioCibernauta() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPaginaInicioCibernauta and vista-pagina-inicio-cibernauta
     */
    public interface VistaPaginaInicioCibernautaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
