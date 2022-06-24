package interfaz;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import vistas.VistaCabeceraCibernauta;

public class Cabecera_Cibernauta extends VistaCabeceraCibernauta{
//	private Image _logo;
//	private Button _registrarse;
//	private Button _iniciar_sesion;
//	public Cibernauta _cibernauta;
	public Iniciar_sesion _iniciar_sesion;
	public Registrarse _registrarse;
	
	public Cabecera_Cibernauta() {
		inicializar();
	}
	
	public void inicializar() {
		this.getElement().getStyle().set("width", "100%");
		this.getElement().getStyle().set("height", "100%");
		
	}
}