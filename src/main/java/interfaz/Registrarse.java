package interfaz;

import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H5;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.dom.Element;

import vistas.VistaRegistrarse;

@SuppressWarnings("serial")
public class Registrarse extends VistaRegistrarse /*Elementos_comunes_inicio_de_sesion*/ {
//	private Label _nick_L;
//	private TextField _nick_TF;
//	private Button _subir_foto;
//	private Label _foto_de_perfil_L;
//	private Image _foto_de_perfil_I;
//	private Label _terceros_L;
//	private Button _registrarse;
//	private Label _iniciar_sesion_L;
//	private Button _iniciar_sesion_B;
//	private Label _seguridad_L;
//	private Image _indice_de_seguridad;
//	private Popup _contrasena_erronea;
//	private Popup _nick_en_uso;
//	public Cabecera_Cibernauta _cabecera_Cibernauta;
//	public Verificar_email _unnamed_Verificar_email_;
//	public Iniciar_sesion _unnamed_Iniciar_sesion_;
	
	public VerticalLayout layout;
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
	
	
	public Registrarse() {
		inicializar();
	}

	public void Registrarse_con_terceros() {
		throw new UnsupportedOperationException();
	}

	public void Registrarse_normal() {
		throw new UnsupportedOperationException();
	}

	private boolean Comprobar_nick_en_uso() {
		throw new UnsupportedOperationException();
	}

	private boolean Comprobar_pass_en_uso() {
		throw new UnsupportedOperationException();
	}

	private int Comprobar_seguridad_pass() {
		throw new UnsupportedOperationException();
	}

	private void Filtrar_nick_malsonante() {
		throw new UnsupportedOperationException();
	}
	
	public void inicializar() {
		this.getElement().getStyle().set("width", "100%");
		this.getElement().getStyle().set("height", "100%");
		layout = getVaadinVerticalLayout().as(VerticalLayout.class);
		
		this.getEnlaceIniciarSesion().addClickListener(new ComponentEventListener<ClickEvent<Button>>() {
			@Override
			public void onComponentEvent(ClickEvent<Button> event) {
				Iniciar_sesion is = new Iniciar_sesion();
				layout.removeAll();
				layout.add(is);
			}
		});
	}
}