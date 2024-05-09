package com.example.ShoeStore.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Cliente")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idcliente", nullable = false, length= 36)
    private String idcliente;

    @Column(name = "tipoidentificacion", nullable = false, length = 11)
    private String tipoidentificacion;

    @Column(name = "identificacioncliente", nullable = false, length = 13)
    private String identificacioncliente;

    @Column(name = "nombrecliente", nullable = false, length = 45)
    private String nombrecliente;

    @Column(name = "apellidocliente", nullable = false, length = 45)
    private String apellidocliente;
    
    @Column(name = "telefono", nullable = false, length = 13)
    private String telefono;

    @Column(name = "correo", nullable = false, length = 45)
    private String correo;

    @Column(name = "direccion", nullable = false, length = 45)
    private String direccion;

    @Column(name = "ciudad", nullable = false, length = 45)
    private String ciudad;

    @Column(name = "estado", nullable = false, length = 1)
    private String estado;
}
