package com.example.ShoeStore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.ShoeStore.models.Producto;

@Repository
public interface IProducto extends CrudRepository<Producto, String>{
    @Query("SELECT m FROM Producto m WHERE m.nombreproducto LIKE %?1% ")
    List<Producto> filtrarProducto(String nombreproducto);

    @Query("SELECT m FROM Producto m WHERE m.estado LIKE %?1%")
    List<Producto> filtrarestado(char estado);
}
