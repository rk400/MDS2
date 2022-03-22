package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-artista-relacionado template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-artista-relacionado")
@JsModule("./src/vista-artista-relacionado.js")
public class VistaArtistaRelacionado extends PolymerTemplate<VistaArtistaRelacionado.VistaArtistaRelacionadoModel> {

    /**
     * Creates a new VistaArtistaRelacionado.
     */
    public VistaArtistaRelacionado() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaArtistaRelacionado and vista-artista-relacionado
     */
    public interface VistaArtistaRelacionadoModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
