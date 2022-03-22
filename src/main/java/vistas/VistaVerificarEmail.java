package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the vista-verificar-email template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-verificar-email")
@JsModule("./src/vista-verificar-email.js")
public class VistaVerificarEmail extends PolymerTemplate<VistaVerificarEmail.VistaVerificarEmailModel> {

    /**
     * Creates a new VistaVerificarEmail.
     */
    public VistaVerificarEmail() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaVerificarEmail and vista-verificar-email
     */
    public interface VistaVerificarEmailModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
