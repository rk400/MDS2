package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-pagina-inicio-administrador template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-pagina-inicio-administrador")
@JsModule("./src/vista-pagina-inicio-administrador.js")
public class VistaPaginaInicioAdministrador extends PolymerTemplate<VistaPaginaInicioAdministrador.VistaPaginaInicioAdministradorModel> {

    /**
     * Creates a new VistaPaginaInicioAdministrador.
     */
    public VistaPaginaInicioAdministrador() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPaginaInicioAdministrador and vista-pagina-inicio-administrador
     */
    public interface VistaPaginaInicioAdministradorModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
