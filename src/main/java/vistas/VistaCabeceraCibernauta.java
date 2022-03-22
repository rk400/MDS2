package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-cabecera-cibernauta template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cabecera-cibernauta")
@JsModule("./src/vista-cabecera-cibernauta.js")
public class VistaCabeceraCibernauta extends PolymerTemplate<VistaCabeceraCibernauta.VistaCabeceraCibernautaModel> {

    /**
     * Creates a new VistaCabeceraCibernauta.
     */
    public VistaCabeceraCibernauta() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaCabeceraCibernauta and vista-cabecera-cibernauta
     */
    public interface VistaCabeceraCibernautaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
