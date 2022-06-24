package interfaz;

import java.util.Vector;

import vistas.VistaUltimosExitos;

public class Ultimos_exitos extends VistaUltimosExitos{
	public Pagina_de_inicio__Cibernauta_ _unnamed_Pagina_de_inicio__Cibernauta__;
	public Vector<Ultimo_exito> _list_Ultimo_exito = new Vector<Ultimo_exito>();
	
	public Ultimos_exitos() {
		inicializar();
	}
	
	public void inicializar() {
		this.getElement().getStyle().set("width", "100%");
		this.getElement().getStyle().set("height", "100%");
	}
}