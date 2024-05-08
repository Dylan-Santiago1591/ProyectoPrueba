package com.example.ShoeStore.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ShoeStore.interfaceService.IProductoService;
import com.example.ShoeStore.interfaces.IProducto;
import com.example.ShoeStore.models.Producto;


@Service
public class ProductoService implements IProductoService{
    @Autowired
    private IProducto data;

    @Override
        public String save(Producto Producto) {
        data.save(Producto);
        return Producto.getIdproducto();
    }

    @Override
    public List<Producto> findAll() {
        List<Producto> listaProducto = (List<Producto>) data.findAll();
        return listaProducto;
    }

    @Override
    public List<Producto> filtrarnombreproducto (String nombreproducto) {
        List<Producto> listaProducto = data.filtrarProducto(nombreproducto);
        return listaProducto;
    }

    @Override
    public List<Producto> filtrarestado(char estado) {
        List<Producto> listaProducto = data.filtrarestado(estado);
        return listaProducto;
    }

}
