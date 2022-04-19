package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H5;
import com.vaadin.flow.component.textfield.TextField;

/**
 * A Designer generated component for the vista-registrarse template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-registrarse")
@JsModule("./src/vista-registrarse.js")
public class VistaRegistrarse extends PolymerTemplate<VistaRegistrarse.VistaRegistrarseModel> {

    @Id("vaadinVerticalLayout")
	private Element vaadinVerticalLayout;
	@Id("img")
	private Image img;
	@Id("label")
	private Label label;
	@Id("vaadinHorizontalLayout")
	private HorizontalLayout vaadinHorizontalLayout;
	@Id("vaadinVerticalLayout1")
	private Element vaadinVerticalLayout1;
	@Id("img1")
	private Image img1;
	@Id("vaadinButton")
	private Button vaadinButton;
	@Id("vaadinVerticalLayout2")
	private Element vaadinVerticalLayout2;
	@Id("img2")
	private Image img2;
	@Id("vaadinButton1")
	private Button vaadinButton1;
	@Id("vaadinVerticalLayout3")
	private Element vaadinVerticalLayout3;
	@Id("img3")
	private Image img3;
	@Id("vaadinButton2")
	private Button vaadinButton2;
	@Id("label1")
	private Label label1;
	@Id("vaadinHorizontalLayout1")
	private HorizontalLayout vaadinHorizontalLayout1;
	@Id("vaadinVerticalLayout4")
	private Element vaadinVerticalLayout4;
	@Id("h5")
	private H5 h5;
	@Id("img4")
	private Image img4;
	@Id("vaadinButton3")
	private Button vaadinButton3;
	@Id("vaadinVerticalLayout5")
	private Element vaadinVerticalLayout5;
	@Id("email")
	private TextField email;
	@Id("Usuario_Nick")
	private TextField usuario_Nick;
	@Id("contraseña")
	private TextField contraseña;
	@Id("vaadinButton4")
	private Button vaadinButton4;
	@Id("vaadinHorizontalLayout2")
	private HorizontalLayout vaadinHorizontalLayout2;
	@Id("label2")
	private Label label2;
	@Id("a")
	private Element a;
	
	/**
     * Creates a new VistaRegistrarse.
     */
    public VistaRegistrarse() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaRegistrarse and vista-registrarse
     */
    public interface VistaRegistrarseModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
