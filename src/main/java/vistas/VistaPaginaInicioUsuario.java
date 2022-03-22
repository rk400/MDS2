package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-pagina-inicio-usuario template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-pagina-inicio-usuario")
@JsModule("./src/vista-pagina-inicio-usuario.js")
public class VistaPaginaInicioUsuario extends PolymerTemplate<VistaPaginaInicioUsuario.VistaPaginaInicioUsuarioModel> {

    /**
     * Creates a new VistaPaginaInicioUsuario.
     */
    public VistaPaginaInicioUsuario() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaPaginaInicioUsuario and vista-pagina-inicio-usuario
     */
    public interface VistaPaginaInicioUsuarioModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
