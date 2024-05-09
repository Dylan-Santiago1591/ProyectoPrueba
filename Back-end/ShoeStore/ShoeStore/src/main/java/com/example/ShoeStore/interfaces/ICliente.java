package com.example.ShoeStore.interfaces;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.ShoeStore.models.Cliente;



@Repository
public interface ICliente extends CrudRepository<Cliente, String> {
    @Query("SELECT c FROM Cliente c WHERE c.nombrecliente LIKE %?1%")
    List<Cliente> filtrarCliente(String nombrecliente);

    @Query("SELECT c FROM Cliente c WHERE c.ciudad LIKE %?1%")
    List<Cliente> filtrarciudad(String ciudad);

    @Query("SELECT c FROM Cliente c WHERE c.estado LIKE %?1%")
    List<Cliente> filtrarestado(char estado);

}