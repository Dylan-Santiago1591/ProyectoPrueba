package com.example.ShoeStore.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ShoeStore.interfaceService.IClienteService;
import com.example.ShoeStore.interfaces.ICliente;
import com.example.ShoeStore.models.Cliente;

@Service
public class ClienteService implements IClienteService {

    @Autowired
    private ICliente data;

    @SuppressWarnings("null")
    @Override
    public String save(Cliente Cliente) {
        data.save(Cliente);
        return Cliente.getIdcliente();
    }

    @Override
    public List<Cliente> findAll() {
        List<Cliente> listaCliente = (List<Cliente>) data.findAll();
        return listaCliente;
    }

    @Override
    public List<Cliente> filtrarCliente (String nombrecliente) {
        List<Cliente> listaMedico = data.filtrarCliente(nombrecliente);
        return listaMedico;
    }

    @Override
    public List<Cliente> filtrarestado(char estado) {
        List<Cliente> listaCliente = data.filtrarestado(estado);
        return listaCliente;
    }

    @Override
    public Optional<Cliente> findOne(String idcliente) {
        @SuppressWarnings("null")
        Optional<Cliente> Medico = data.findById(idcliente);
        return Cliente;
    }

}
