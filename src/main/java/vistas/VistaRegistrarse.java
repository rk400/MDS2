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

   
	
	@Id("logo")
	private Image logo;
	@Id("labelConect")
	private Label labelConect;
	@Id("vaadinHorizontalConnect")
	private HorizontalLayout vaadinHorizontalConnect;
	@Id("vaadinVerticalApple")
	private Element vaadinVerticalApple;
	@Id("imgApple")
	private Image imgApple;
	@Id("appleButton")
	private Button appleButton;
	@Id("vaadinVerticalFacebook")
	private Element vaadinVerticalFacebook;
	@Id("imgFacebook")
	private Image imgFacebook;
	@Id("vaadinButtonFacebook")
	private Button vaadinButtonFacebook;
	@Id("vaadinVerticalGoogle")
	private Element vaadinVerticalGoogle;
	@Id("imgGoogle")
	private Image imgGoogle;
	@Id("vaadinButtonGoogle")
	private Button vaadinButtonGoogle;
	@Id("vaadinHorizontalDatosRegistro")
	private HorizontalLayout vaadinHorizontalDatosRegistro;
	@Id("fotoCabecera")
	private H5 fotoCabecera;
	@Id("imgFoto")
	private Image imgFoto;
	@Id("vaadinButtonFoto")
	private Button vaadinButtonFoto;
	@Id("vaadinVerticalDatos")
	private Element vaadinVerticalDatos;
	@Id("vaadinRegistrarse")
	private Button vaadinRegistrarse;
	@Id("vaadinHorizontalIniciar")
	private HorizontalLayout vaadinHorizontalIniciar;
	@Id("labelPregunta")
	private Label labelPregunta;
	@Id("enlaceIniciarSesion")
	private Button enlaceIniciarSesion;
	@Id("vaadinVerticalLayout")
	private Element vaadinVerticalLayout;

	public Button getEnlaceIniciarSesion() {
		return enlaceIniciarSesion;
	}

	public void setEnlaceIniciarSesion(Button enlaceIniciarSesion) {
		this.enlaceIniciarSesion = enlaceIniciarSesion;
	}

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

	public Image getLogo() {
		return logo;
	}

	public void setLogo(Image logo) {
		this.logo = logo;
	}

	public Label getLabelConect() {
		return labelConect;
	}

	public void setLabelConect(Label labelConect) {
		this.labelConect = labelConect;
	}

	public HorizontalLayout getVaadinHorizontalConnect() {
		return vaadinHorizontalConnect;
	}

	public void setVaadinHorizontalConnect(HorizontalLayout vaadinHorizontalConnect) {
		this.vaadinHorizontalConnect = vaadinHorizontalConnect;
	}

	public Element getVaadinVerticalApple() {
		return vaadinVerticalApple;
	}

	public void setVaadinVerticalApple(Element vaadinVerticalApple) {
		this.vaadinVerticalApple = vaadinVerticalApple;
	}

	public Image getImgApple() {
		return imgApple;
	}

	public void setImgApple(Image imgApple) {
		this.imgApple = imgApple;
	}

	public Button getAppleButton() {
		return appleButton;
	}

	public void setAppleButton(Button appleButton) {
		this.appleButton = appleButton;
	}

	public Element getVaadinVerticalFacebook() {
		return vaadinVerticalFacebook;
	}

	public void setVaadinVerticalFacebook(Element vaadinVerticalFacebook) {
		this.vaadinVerticalFacebook = vaadinVerticalFacebook;
	}

	public Image getImgFacebook() {
		return imgFacebook;
	}

	public void setImgFacebook(Image imgFacebook) {
		this.imgFacebook = imgFacebook;
	}

	public Button getVaadinButtonFacebook() {
		return vaadinButtonFacebook;
	}

	public void setVaadinButtonFacebook(Button vaadinButtonFacebook) {
		this.vaadinButtonFacebook = vaadinButtonFacebook;
	}

	public Element getVaadinVerticalGoogle() {
		return vaadinVerticalGoogle;
	}

	public void setVaadinVerticalGoogle(Element vaadinVerticalGoogle) {
		this.vaadinVerticalGoogle = vaadinVerticalGoogle;
	}

	public Image getImgGoogle() {
		return imgGoogle;
	}

	public void setImgGoogle(Image imgGoogle) {
		this.imgGoogle = imgGoogle;
	}

	public Button getVaadinButtonGoogle() {
		return vaadinButtonGoogle;
	}

	public void setVaadinButtonGoogle(Button vaadinButtonGoogle) {
		this.vaadinButtonGoogle = vaadinButtonGoogle;
	}

	public HorizontalLayout getVaadinHorizontalDatosRegistro() {
		return vaadinHorizontalDatosRegistro;
	}

	public void setVaadinHorizontalDatosRegistro(HorizontalLayout vaadinHorizontalDatosRegistro) {
		this.vaadinHorizontalDatosRegistro = vaadinHorizontalDatosRegistro;
	}

	public H5 getFotoCabecera() {
		return fotoCabecera;
	}

	public void setFotoCabecera(H5 fotoCabecera) {
		this.fotoCabecera = fotoCabecera;
	}

	public Image getImgFoto() {
		return imgFoto;
	}

	public void setImgFoto(Image imgFoto) {
		this.imgFoto = imgFoto;
	}

	public Button getVaadinButtonFoto() {
		return vaadinButtonFoto;
	}

	public void setVaadinButtonFoto(Button vaadinButtonFoto) {
		this.vaadinButtonFoto = vaadinButtonFoto;
	}

	public Element getVaadinVerticalDatos() {
		return vaadinVerticalDatos;
	}

	public void setVaadinVerticalDatos(Element vaadinVerticalDatos) {
		this.vaadinVerticalDatos = vaadinVerticalDatos;
	}

	public Button getVaadinRegistrarse() {
		return vaadinRegistrarse;
	}

	public void setVaadinRegistrarse(Button vaadinRegistrarse) {
		this.vaadinRegistrarse = vaadinRegistrarse;
	}

	public HorizontalLayout getVaadinHorizontalIniciar() {
		return vaadinHorizontalIniciar;
	}

	public Element getVaadinVerticalLayout() {
		return vaadinVerticalLayout;
	}

	public void setVaadinVerticalLayout(Element vaadinVerticalLayout) {
		this.vaadinVerticalLayout = vaadinVerticalLayout;
	}

	public void setVaadinHorizontalIniciar(HorizontalLayout vaadinHorizontalIniciar) {
		this.vaadinHorizontalIniciar = vaadinHorizontalIniciar;
	}

	public Label getLabelPregunta() {
		return labelPregunta;
	}

	public void setLabelPregunta(Label labelPregunta) {
		this.labelPregunta = labelPregunta;
	}
}
