package interfaz;


import java.util.Vector;

import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import vistas.VistaPaginaInicioCibernauta;


@SuppressWarnings("serial")
public class Pagina_de_inicio__Cibernauta_ extends VistaPaginaInicioCibernauta{
//	private Label _texto_contacto;
	public Cibernauta _unnamed_Cibernauta_;
	public Vector<Ultimos_exitos> ultimos_exitos = new Vector<Ultimos_exitos>();
	public Vector<Tendencias_actuales> _unnamed_Tendencias_actuales_ = new Vector<Tendencias_actuales>();
	public VerticalLayout layout;
	
	public Pagina_de_inicio__Cibernauta_() {
		inicializar();
	}
	
	public void inicializar() {
		layout = getVaadinVerticalLayout().as(VerticalLayout.class);
		layout.getStyle().set("width", "100%");
		layout.getStyle().set("height", "100%");
		Cabecera_Cibernauta cabecera = new Cabecera_Cibernauta();
		
		Ultimos_exitos ue = new Ultimos_exitos();
		
		Tendencias_actuales ta = new Tendencias_actuales();
		
		Footer_Reproducir_musica footer = new Footer_Reproducir_musica();
		
		cabecera.getVaadinButton1IniciarSesion().addClickListener(new ComponentEventListener<ClickEvent<Button>>() {
			
			@Override
			public void onComponentEvent(ClickEvent<Button> event) {
				Iniciar_sesion is = new Iniciar_sesion();
				layout.removeAll();
				layout.add(is);
			}
		});
		
		layout.add(cabecera);
		layout.add(ue);
		layout.add(ta);
		layout.add(footer);
	}
	
}