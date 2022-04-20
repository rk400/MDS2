package interfaz;

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
		getVaadinHorizontalLayout().getStyle().set("width", "100%");
		getVaadinVerticalLayout().getStyle().set("width", "100%");
		getVaadinHorizontalLayout1().getStyle().set("width", "100%");
	}
}