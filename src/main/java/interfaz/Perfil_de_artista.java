package interfaz;

import java.util.Vector;
import interfaz.Artistas_similares;
import interfaz.Canciones_populares;
import interfaz.Listas_en_las_que_participa;
import interfaz.Albumes;

public class Perfil_de_artista extends Perfil_de_usuario {
	public Artista _artista;
	public Vector<Artistas_similares> _unnamed_Artistas_similares_ = new Vector<Artistas_similares>();
	public Vector<Canciones_populares> _unnamed_Canciones_populares_ = new Vector<Canciones_populares>();
	public Vector<Listas_en_las_que_participa> _unnamed_Listas_en_las_que_participa_ = new Vector<Listas_en_las_que_participa>();
	public Vector<Albumes> _albumes = new Vector<Albumes>();
}