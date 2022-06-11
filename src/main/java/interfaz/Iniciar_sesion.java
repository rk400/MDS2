package interfaz;

import vistas.VistaIniciarSesion;

public class Iniciar_sesion extends VistaIniciarSesion {
//	private Label _terceros_L;
//	private Label _contrasena_olvidada;
//	private ChechBox _recordar;
//	private Button _iniciar_sesion;
//	private Label _registrate_L;
//	private Popup _inicio_de_sesion_erroneo;
//	private Popup _cuenta_bloqueada;
//	private int _contador_bloqueo;
//	private Popup _usuario_de_baja;
	public Cabecera_Cibernauta _cabecera_Cibernauta;
	public Registrarse _unnamed_Registrarse_;
	public Recuperar_contrasena _recuperar_contrasena;

	public void Iniciar_sesion_con_terceros() {
		throw new UnsupportedOperationException();
	}

	public void Iniciar_sesion_normal() {
		throw new UnsupportedOperationException();
	}

	private boolean Comprobar_credenciales() {
		throw new UnsupportedOperationException();
	}

	private void Incrementar_bloqueo() {
		throw new UnsupportedOperationException();
	}

	private boolean Comprobar_bloqueo() {
		throw new UnsupportedOperationException();
	}
	
	public Iniciar_sesion() {
		inicializar();
	}
	
	public void inicializar() {
		this.getElement().getStyle().set("width", "100%");
		this.getElement().getStyle().set("height", "100%");
	}
}