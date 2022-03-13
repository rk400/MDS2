package sputifly;

import java.io.Serializable;

import org.springframework.stereotype.Service;

@Service
public class GreetService implements Serializable {

    public String greet(String name) {
        if (name == null || name.isEmpty()) {
            return "Hola anónimo";
        } else {
            return "Hola " + name;
        }
    }

}
