package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.component.button.Button;

/**
 * A Designer generated component for the vista-cabecera-cibernauta template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-cabecera-cibernauta")
@JsModule("./src/vista-cabecera-cibernauta.js")
public class VistaCabeceraCibernauta extends PolymerTemplate<VistaCabeceraCibernauta.VistaCabeceraCibernautaModel> {

	@Id("mainLayout")
	private Element mainLayout;
    @Id("vaadinHorizontalLayout")
	private HorizontalLayout vaadinHorizontalLayout;
	@Id("img")
	private Image img;
	@Id("vaadinVerticalLayout")
	private VerticalLayout vaadinVerticalLayout;
	@Id("vaadinHorizontalLayout1")
	private HorizontalLayout vaadinHorizontalLayout1;
	@Id("botonRegistrarse")
	private Button vaadinButtonRegistrarse;
	@Id("botonIniciarSesion")
	private Button vaadinButton1IniciarSesion;
	
	
	

	public Element getMainLayout() {
		return mainLayout;
	}

	public void setMainLayout(Element mainLayout) {
		this.mainLayout = mainLayout;
	}

	public VerticalLayout getVaadinVerticalLayout() {
		return vaadinVerticalLayout;
	}

	public void setVaadinVerticalLayout(VerticalLayout vaadinVerticalLayout) {
		this.vaadinVerticalLayout = vaadinVerticalLayout;
	}

	public HorizontalLayout getVaadinHorizontalLayout() {
		return vaadinHorizontalLayout;
	}

	public void setVaadinHorizontalLayout(HorizontalLayout vaadinHorizontalLayout) {
		this.vaadinHorizontalLayout = vaadinHorizontalLayout;
	}

	public Image getImg() {
		return img;
	}

	public void setImg(Image img) {
		this.img = img;
	}

	public HorizontalLayout getVaadinHorizontalLayout1() {
		return vaadinHorizontalLayout1;
	}

	public void setVaadinHorizontalLayout1(HorizontalLayout vaadinHorizontalLayout1) {
		this.vaadinHorizontalLayout1 = vaadinHorizontalLayout1;
	}

	public Button getVaadinButtonRegistrarse() {
		return vaadinButtonRegistrarse;
	}

	public void setVaadinButtonRegistrarse(Button vaadinButtonRegistrarse) {
		this.vaadinButtonRegistrarse = vaadinButtonRegistrarse;
	}

	public Button getVaadinButtonIniciarSesion() {
		return vaadinButton1IniciarSesion;
	}

	public void setVaadinButtonIniciarSesion(Button vaadinButton1IniciarSesion) {
		this.vaadinButton1IniciarSesion = vaadinButton1IniciarSesion;
	}

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
