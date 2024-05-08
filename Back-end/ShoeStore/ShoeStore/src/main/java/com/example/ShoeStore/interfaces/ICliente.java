package com.example.ShoeStore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.ShoeStore.models.Cliente;



@Repository
public interface ICliente extends CrudRepository<Cliente, String> {
    @Query("SELECT m FROM Cliente m WHERE m.nombrecliente LIKE %?1% OR m.ciudad LIKE %?1%")
    List<Cliente> filtrarCliente(String nombrecliente);

    @Query("SELECT m FROM Cliente m WHERE m.estado LIKE %?1%")
    List<Cliente> filtrarestado(char estado);

}
