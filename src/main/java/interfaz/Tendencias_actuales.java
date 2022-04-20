package interfaz;

import java.util.Vector;

import vistas.VistaTendenciasActuales;

public class Tendencias_actuales extends VistaTendenciasActuales {
	public Pagina_de_inicio__Cibernauta_ _unnamed_Pagina_de_inicio__Cibernauta__;
	public Vector<Tendencia_actual> _list_Tendencia_actual = new Vector<Tendencia_actual>();
	
	public Tendencias_actuales() {
		inicializar();
	}
	
	public void inicializar() {
		getVaadinHorizontalLayout().getStyle().set("width", "100%");
	}
}