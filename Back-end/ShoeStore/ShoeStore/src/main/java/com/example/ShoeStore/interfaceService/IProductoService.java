package com.example.ShoeStore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.example.ShoeStore.models.Producto;

public interface IProductoService {
        public String save(Producto Producto);
    public List<Producto> findAll();
    public List<Producto> filtrarnombreproducto (String nombreproducto);
    public List<Producto> filtrarestado(char estado);
    public Optional<Producto> findOne(String id);
}
