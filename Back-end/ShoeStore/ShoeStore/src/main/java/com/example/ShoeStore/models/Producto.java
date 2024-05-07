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
@Entity(name = "Productos")

public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idproducto", nullable = false, length= 36)
    private String idproducto;

    @Column(name = "nombreproducto", nullable = false, length = 45)
    private String nombreproducto;

    @Column(name = "descripcion", nullable = false, length = 45)
    private String descripcion;

    @Column(name = "cantidad", nullable = false, length = 50)
    private String cantidad;
    
    @Column(name = "precio", nullable = false, length = 13)
    private String precio;

    @Column(name = "porcentajeiva", nullable = false, length = 45)
    private String porcentajeiva;

    @Column(name = "porcentajedescuento", nullable = false, length = 45)
    private String porcentajedescuento;

    @Column(name = "estado", nullable = false, length = 1)
    private String estado;
}
