package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Label;

/**
 * A Designer generated component for the vista-elementos-visuales-comunes template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-elementos-visuales-comunes")
@JsModule("./src/vista-elementos-visuales-comunes.js")
public class VistaElementosVisualesComunes extends PolymerTemplate<VistaElementosVisualesComunes.VistaElementosVisualesComunesModel> {

    @Id("vaadinVerticalLayout")
	private Element vaadinVerticalLayout;
	@Id("img")
	private Image fotoCancion;
	@Id("vaadinButton")
	private Button vaadinButtonReproducir;
	@Id("label")
	private Label labelCancion;
	@Id("label1")
	private Label labelArtista;
	
	
	public Element getVaadinVerticalLayout() {
		return vaadinVerticalLayout;
	}

	public void setVaadinVerticalLayout(Element vaadinVerticalLayout) {
		this.vaadinVerticalLayout = vaadinVerticalLayout;
	}

	public Image getFotoCancion() {
		return fotoCancion;
	}

	public void setFotoCancion(Image fotoCancion) {
		this.fotoCancion = fotoCancion;
	}

	public Button getVaadinButtonReproducir() {
		return vaadinButtonReproducir;
	}

	public void setVaadinButtonReproducir(Button vaadinButtonReproducir) {
		this.vaadinButtonReproducir = vaadinButtonReproducir;
	}

	public Label getLabelCancion() {
		return labelCancion;
	}

	public void setLabelCancion(Label labelCancion) {
		this.labelCancion = labelCancion;
	}

	public Label getLabelArtista() {
		return labelArtista;
	}

	public void setLabelArtista(Label labelArtista) {
		this.labelArtista = labelArtista;
	}

	/**
     * Creates a new VistaElementosVisualesComunes.
     */
    public VistaElementosVisualesComunes() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaElementosVisualesComunes and vista-elementos-visuales-comunes
     */
    public interface VistaElementosVisualesComunesModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
