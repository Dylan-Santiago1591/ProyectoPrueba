package com.example.ShoeStore.interfaceService;


import java.util.List;
import java.util.Optional;

import com.example.ShoeStore.models.Cliente;



public interface IClienteService {
    public String save(Cliente Cliente);
    public List<Cliente> findAll();
    public List<Cliente> filtrarnombre (String nombrecliente);
    public List<Cliente> filtrarestado(char estado);
    public List<Cliente> filtrarciudad(String ciudad);
    public Optional<Cliente> findOne(String id);

}