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

@RequestMapping("api/v1/Cliente")
@RestController
public class ClienteController {
    @Autowired
    private IClienteService ClienteService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Cliente") Cliente Cliente){
        
        //verificar que el campo documento de identidad sea diferente vacio
        //Añadir campos obligatorios
        //no cambiar nada
        if (Cliente.getidentificacioncliente().equals("")) {

            return new ResponseEntity<>("El documento de identidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getnombrecliente().equals("")) {
            
            return new ResponseEntity<>("El primer nombre es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getapellidocliente().equals("")) {
            
            return new ResponseEntity<>("El primer apellido es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.gettelefono().equals("")) {
            
            return new ResponseEntity<>("El numero de celular es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getestado().equals("")) {
            
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

    @GetMapping("/filtrarnombrecliente/{nombrecliente}")
    public ResponseEntity<Object> findFiltro(@PathVariable String nombrecliente) {
        var listaCliente = ClienteService.filtrarcliente(filtro);
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }


    @GetMapping("/filtrarestado/{estado}")
    public ResponseEntity<Object> findEstado(@PathVariable char estado) {
        var listaCliente = ClienteService.filtroClienteEstado(estado);
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
            if (Cliente.getestado().equals("H")) {

                Cliente.setestado("D");
                ClienteService.save(Cliente);
                return new ResponseEntity<>("Se ha deshabilitado correctamente", HttpStatus.OK);
            } else
                Cliente.setestado("H");
                ClienteService.save(Cliente);
            return new ResponseEntity<>("Se ha habilitado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Medico") Medico MedicoUpdate) {
        var Medico = medicoService.findOne(id).get();
        if (Medico != null) {

            Medico.setDocumentoIdentidad(MedicoUpdate.getDocumentoIdentidad());
            Medico.setPrimerNombre(MedicoUpdate.getPrimerNombre());
            Medico.setSegundoNombre(MedicoUpdate.getSegundoNombre());
            Medico.setPrimerApellido(MedicoUpdate.getPrimerApellido());
            Medico.setSegundoApellido(MedicoUpdate.getSegundoApellido());
            Medico.setCelular(MedicoUpdate.getCelular());
            Medico.setCorreo(MedicoUpdate.getCorreo());
            Medico.setEstado(MedicoUpdate.getEstado());

            medicoService.save(Medico);
            return new ResponseEntity<>(Medico, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Medico NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}

