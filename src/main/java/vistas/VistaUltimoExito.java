package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.component.template.Id;

/**
 * A Designer generated component for the vista-ultimo-exito template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-ultimo-exito")
@JsModule("./src/vista-ultimo-exito.js")
public class VistaUltimoExito extends PolymerTemplate<VistaUltimoExito.VistaUltimoExitoModel> {

    /**
     * Creates a new VistaUltimoExito.
     */
    public VistaUltimoExito() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaUltimoExito and vista-ultimo-exito
     */
    public interface VistaUltimoExitoModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
