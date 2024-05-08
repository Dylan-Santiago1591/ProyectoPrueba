package com.example.ShoeStore.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ShoeStore.interfaceService.IClienteService;
import com.example.ShoeStore.models.Cliente;


@RequestMapping("api/v1/Cliente/")
@RestController
public class ClienteController {
        @Autowired
    private IClienteService ClienteService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Cliente") Cliente Cliente){
        
        //verificar que el campo documento de identidad sea diferente vacio
        //Añadir campos obligatorios
        //no cambiar nada
        if (Cliente.getIdentificacioncliente().equals("")) {

            return new ResponseEntity<>("El documento de identidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getNombrecliente().equals("")) {
            
            return new ResponseEntity<>("El primer nombre es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getApellidocliente().equals("")) {
            
            return new ResponseEntity<>("El primer apellido es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getCorreo().equals("")) {
            
            return new ResponseEntity<>("El correo es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getTelefono().equals("")) {
            
            return new ResponseEntity<>("El numero de celular es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getEstado().equals("")) {
            
            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }
        
        
        // todo bien
        ClienteService.save(Cliente);
        return new ResponseEntity<>(Cliente, HttpStatus.OK);

    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaCliente = ClienteService.findAll();
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltro/{nombrecliente}")
    public ResponseEntity<Object> findnombreCliente(@PathVariable String nombrecliente) {
        var listaCliente = ClienteService.filtrarnombre(nombrecliente);
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }


    @GetMapping("/filtrarestado/{estado}")
    public ResponseEntity<Object> findEstado(@PathVariable char estado) {
        var listaCliente = ClienteService.filtrarestado(estado);
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Cliente = ClienteService.findOne(id);
        return new ResponseEntity<>(Cliente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var Cliente = ClienteService.findOne(id).get();
        if (Cliente != null) {
            if (Cliente.getEstado().equals("H")) {

                Cliente.setEstado("D");
                ClienteService.save(Cliente);
                return new ResponseEntity<>("Se ha deshabilitado correctamente", HttpStatus.OK);
            } else
                Cliente.setEstado("H");
                ClienteService.save(Cliente);
            return new ResponseEntity<>("Se ha habilitado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Cliente") Cliente ClienteUpdate) {
        var Cliente = ClienteService.findOne(id).get();
        if (Cliente != null) {

            Cliente.setIdentificacioncliente(ClienteUpdate.getIdentificacioncliente());
            Cliente.setNombrecliente(ClienteUpdate.getNombrecliente());
            Cliente.setApellidocliente(ClienteUpdate.getApellidocliente());
            Cliente.setTelefono(ClienteUpdate.getTelefono());
            Cliente.setCorreo(ClienteUpdate.getCorreo());
            Cliente.setEstado(ClienteUpdate.getEstado());

            ClienteService.save(Cliente);
            return new ResponseEntity<>(Cliente, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Cliente NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }


    
}