package vistas;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.component.template.Id;
import vistas.VistaCabeceraCibernauta;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import vistas.VistaUltimosExitos;
import vistas.VistaTendenciasActuales;
import vistas.VistaFooterReproducirMusicaCibernauta;

/**
 * A Designer generated component for the vista-pagina-inicio-cibernauta template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("vista-pagina-inicio-cibernauta")
@JsModule("./src/vista-pagina-inicio-cibernauta.js")
public class VistaPaginaInicioCibernauta extends PolymerTemplate<VistaPaginaInicioCibernauta.VistaPaginaInicioCibernautaModel> {

    

	@Id("vaadinVerticalLayout")
	private Element vaadinVerticalLayout;
	@Id("vistaCabeceraCibernauta")
	private VistaCabeceraCibernauta vistaCabeceraCibernauta;
	@Id("label")
	private Label label;
	@Id("vaadinHorizontalLayout")
	private HorizontalLayout vaadinHorizontalLayout;
	@Id("vistaUltimosExitos")
	private VistaUltimosExitos vistaUltimosExitos;
	@Id("label1")
	private Label label1;
	@Id("vaadinHorizontalLayout1")
	private HorizontalLayout vaadinHorizontalLayout1;
	@Id("vistaTendenciasActuales")
	private VistaTendenciasActuales vistaTendenciasActuales;
	@Id("vistaFooterReproducirMusicaCibernauta")
	private VistaFooterReproducirMusicaCibernauta vistaFooterReproducirMusicaCibernauta;

	public Element getVaadinVerticalLayout() {
		return vaadinVerticalLayout;
	}

	public void setVaadinVerticalLayout(Element vaadinVerticalLayout) {
		this.vaadinVerticalLayout = vaadinVerticalLayout;
	}

	public VistaCabeceraCibernauta getVistaCabeceraCibernauta() {
		return vistaCabeceraCibernauta;
	}

	public void setVistaCabeceraCibernauta(VistaCabeceraCibernauta vistaCabeceraCibernauta) {
		this.vistaCabeceraCibernauta = vistaCabeceraCibernauta;
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

	public VistaUltimosExitos getVistaUltimosExitos() {
		return vistaUltimosExitos;
	}

	public void setVistaUltimosExitos(VistaUltimosExitos vistaUltimosExitos) {
		this.vistaUltimosExitos = vistaUltimosExitos;
	}

	public Label getLabel1() {
		return label1;
	}

	public void setLabel1(Label label1) {
		this.label1 = label1;
	}

	public HorizontalLayout getVaadinHorizontalLayout1() {
		return vaadinHorizontalLayout1;
	}

	public void setVaadinHorizontalLayout1(HorizontalLayout vaadinHorizontalLayout1) {
		this.vaadinHorizontalLayout1 = vaadinHorizontalLayout1;
	}

	public VistaTendenciasActuales getVistaTendenciasActuales() {
		return vistaTendenciasActuales;
	}

	public void setVistaTendenciasActuales(VistaTendenciasActuales vistaTendenciasActuales) {
		this.vistaTendenciasActuales = vistaTendenciasActuales;
	}

	public VistaFooterReproducirMusicaCibernauta getVistaFooterReproducirMusicaCibernauta() {
		return vistaFooterReproducirMusicaCibernauta;
	}

	public void setVistaFooterReproducirMusicaCibernauta(
			VistaFooterReproducirMusicaCibernauta vistaFooterReproducirMusicaCibernauta) {
		this.vistaFooterReproducirMusicaCibernauta = vistaFooterReproducirMusicaCibernauta;
	}
	/**
     * Creates a new VistaPaginaInicioCibernauta.
     */
    public VistaPaginaInicioCibernauta() {
        // You can initialise any data required for the connected UI components here.
    	
    }

    /**
     * This model binds properties between VistaPaginaInicioCibernauta and vista-pagina-inicio-cibernauta
     */
    public interface VistaPaginaInicioCibernautaModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
