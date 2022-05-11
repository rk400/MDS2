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
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import vistas.VistaUltimosExitos;
import vistas.VistaTendenciasActuales;
import vistas.VistaFooterReproducirMusica;

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
	
	public Element getVaadinVerticalLayout() {
		return vaadinVerticalLayout;
	}

	public void setVaadinVerticalLayout(Element vaadinVerticalLayout) {
		this.vaadinVerticalLayout = vaadinVerticalLayout;
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
