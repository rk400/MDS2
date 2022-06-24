package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;

import interfaz.Iniciar_sesion;
import sputifly.MainView;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.checkbox.Checkbox;

/**
 * A Designer generated component for the vista-iniciar-sesion template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-iniciar-sesion")
@JsModule("./src/vista-iniciar-sesion.js")
public class VistaIniciarSesion extends PolymerTemplate<VistaIniciarSesion.VistaIniciarSesionModel> {

    @Id("vaadinVerticalLayout")
	private VerticalLayout vaadinVerticalLayout;
	@Id("img")
	private Image img;
	@Id("label")
	private Label label;
	@Id("vaadinHorizontalLayout")
	private HorizontalLayout vaadinHorizontalLayout;
	@Id("vaadinVerticalLayout1")
	private VerticalLayout vaadinVerticalLayout1;
	@Id("img1")
	private Image img1;
	@Id("vaadinButton")
	private Button vaadinButton;
	@Id("vaadinVerticalLayout2")
	private VerticalLayout vaadinVerticalLayout2;
	@Id("img2")
	private Image img2;
	@Id("vaadinButton1")
	private Button vaadinButton1;
	@Id("vaadinVerticalLayout3")
	private VerticalLayout vaadinVerticalLayout3;
	@Id("img3")
	private Image img3;
	@Id("vaadinButton2")
	private Button vaadinButton2;
	@Id("label1")
	private Label label1;
	@Id("Email_Usuario")
	private TextField email_Usuario;
	@Id("contraseña")
	private TextField contraseña;
	@Id("vaadinCheckbox")
	private Checkbox vaadinCheckbox;
	@Id("vaadinButton3")
	private Button vaadinButton3;
	@Id("vaadinHorizontalLayout1")
	private HorizontalLayout vaadinHorizontalLayout1;
	@Id("label2")
	private Label label2;
	@Id("enlaceRegistrarse")
	private Button enlaceRegistrarse;
	@Id("enlaceRecordarContraseña")
	private Button enlaceRecordarContraseña;
	
	public Button getEnlaceRegistrarse() {
		return enlaceRegistrarse;
	}

	public void setEnlaceRegistrarse(Button enlaceRegistrarse) {
		this.enlaceRegistrarse = enlaceRegistrarse;
	}

	public Button getEnlaceRecordarContraseña() {
		return enlaceRecordarContraseña;
	}

	public void setEnlaceRecordarContraseña(Button enlaceRecordarContraseña) {
		this.enlaceRecordarContraseña = enlaceRecordarContraseña;
	}
	
	public VerticalLayout getVaadinVerticalLayout() {
		return vaadinVerticalLayout;
	}

	public void setVaadinVerticalLayout(VerticalLayout vaadinVerticalLayout) {
		this.vaadinVerticalLayout = vaadinVerticalLayout;
	}

	public Image getImg() {
		return img;
	}

	public void setImg(Image img) {
		this.img = img;
	}

	public Label getLabel() {
		return label;
	}

	public void setLabel(Label label) {
		this.label = label;
	}

	public HorizontalLayout getVaadinHorizontalLayout() {
		return vaadinHorizontalLayout;
	}

	public void setVaadinHorizontalLayout(HorizontalLayout vaadinHorizontalLayout) {
		this.vaadinHorizontalLayout = vaadinHorizontalLayout;
	}

	public VerticalLayout getVaadinVerticalLayout1() {
		return vaadinVerticalLayout1;
	}

	public void setVaadinVerticalLayout1(VerticalLayout vaadinVerticalLayout1) {
		this.vaadinVerticalLayout1 = vaadinVerticalLayout1;
	}

	public Image getImg1() {
		return img1;
	}

	public void setImg1(Image img1) {
		this.img1 = img1;
	}

	public Button getVaadinButton() {
		return vaadinButton;
	}

	public void setVaadinButton(Button vaadinButton) {
		this.vaadinButton = vaadinButton;
	}

	public VerticalLayout getVaadinVerticalLayout2() {
		return vaadinVerticalLayout2;
	}

	public void setVaadinVerticalLayout2(VerticalLayout vaadinVerticalLayout2) {
		this.vaadinVerticalLayout2 = vaadinVerticalLayout2;
	}

	public Image getImg2() {
		return img2;
	}

	public void setImg2(Image img2) {
		this.img2 = img2;
	}

	public Button getVaadinButton1() {
		return vaadinButton1;
	}

	public void setVaadinButton1(Button vaadinButton1) {
		this.vaadinButton1 = vaadinButton1;
	}

	public VerticalLayout getVaadinVerticalLayout3() {
		return vaadinVerticalLayout3;
	}

	public void setVaadinVerticalLayout3(VerticalLayout vaadinVerticalLayout3) {
		this.vaadinVerticalLayout3 = vaadinVerticalLayout3;
	}

	public Image getImg3() {
		return img3;
	}

	public void setImg3(Image img3) {
		this.img3 = img3;
	}

	public Button getVaadinButton2() {
		return vaadinButton2;
	}

	public void setVaadinButton2(Button vaadinButton2) {
		this.vaadinButton2 = vaadinButton2;
	}

	public Label getLabel1() {
		return label1;
	}

	public void setLabel1(Label label1) {
		this.label1 = label1;
	}

	public TextField getEmail_Usuario() {
		return email_Usuario;
	}

	public void setEmail_Usuario(TextField email_Usuario) {
		this.email_Usuario = email_Usuario;
	}

	public TextField getContraseña() {
		return contraseña;
	}

	public void setContraseña(TextField contraseña) {
		this.contraseña = contraseña;
	}

	public Checkbox getVaadinCheckbox() {
		return vaadinCheckbox;
	}

	public void setVaadinCheckbox(Checkbox vaadinCheckbox) {
		this.vaadinCheckbox = vaadinCheckbox;
	}

	public Button getVaadinButton3() {
		return vaadinButton3;
	}

	public void setVaadinButton3(Button vaadinButton3) {
		this.vaadinButton3 = vaadinButton3;
	}

	public HorizontalLayout getVaadinHorizontalLayout1() {
		return vaadinHorizontalLayout1;
	}

	public void setVaadinHorizontalLayout1(HorizontalLayout vaadinHorizontalLayout1) {
		this.vaadinHorizontalLayout1 = vaadinHorizontalLayout1;
	}

	public Label getLabel2() {
		return label2;
	}

	public void setLabel2(Label label2) {
		this.label2 = label2;
	}

	/**
     * Creates a new VistaIniciarSesion.
     */
    public VistaIniciarSesion() {
        // You can initialise any data required for the connected UI components here.
    	
    }

    /**
     * This model binds properties between VistaIniciarSesion and vista-iniciar-sesion
     */
    public interface VistaIniciarSesionModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
