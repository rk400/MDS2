package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-ver-estadisticas template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-ver-estadisticas")
@JsModule("./src/vista-ver-estadisticas.js")
public class VistaVerEstadisticas extends PolymerTemplate<VistaVerEstadisticas.VistaVerEstadisticasModel> {

    /**
     * Creates a new VistaVerEstadisticas.
     */
    public VistaVerEstadisticas() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaVerEstadisticas and vista-ver-estadisticas
     */
    public interface VistaVerEstadisticasModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
