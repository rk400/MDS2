package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.component.html.Label;

/**
 * A Designer generated component for the vista-ultimos-exitos template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-ultimos-exitos")
@JsModule("./src/vista-ultimos-exitos.js")
public class VistaUltimosExitos extends PolymerTemplate<VistaUltimosExitos.VistaUltimosExitosModel> {
	
    @Id("vaadinHorizontalLayout")
	private HorizontalLayout vaadinHorizontalLayout;
	@Id("vistaElementosVisualesComunes")
	private Element cancion1;
	@Id("vistaElementosVisualesComunes1")
	private Element cancion2;
	@Id("vistaElementosVisualesComunes2")
	private Element cancion3;
	@Id("vistaElementosVisualesComunes3")
	private Element cancion4;
	@Id("vaadinVerticalLayout")
	private Element vaadinVerticalLayout;
	@Id("label")
	private Label label;
	
	
	public HorizontalLayout getVaadinHorizontalLayout() {
		return vaadinHorizontalLayout;
	}

	public void setVaadinHorizontalLayout(HorizontalLayout vaadinHorizontalLayout) {
		this.vaadinHorizontalLayout = vaadinHorizontalLayout;
	}

	public Element getCancion1() {
		return cancion1;
	}

	public void setCancion1(Element cancion1) {
		this.cancion1 = cancion1;
	}

	public Element getCancion2() {
		return cancion2;
	}

	public void setCancion2(Element cancion2) {
		this.cancion2 = cancion2;
	}

	public Element getCancion3() {
		return cancion3;
	}

	public void setCancion3(Element cancion3) {
		this.cancion3 = cancion3;
	}

	public Element getCancion4() {
		return cancion4;
	}

	public void setCancion4(Element cancion4) {
		this.cancion4 = cancion4;
	}

	/**
     * Creates a new VistaUltimosExitos.
     */
    public VistaUltimosExitos() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between VistaUltimosExitos and vista-ultimos-exitos
     */
    public interface VistaUltimosExitosModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
