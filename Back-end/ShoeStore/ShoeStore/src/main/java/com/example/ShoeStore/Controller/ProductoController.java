package com.example.ShoeStore.Controller;

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

import com.example.ShoeStore.interfaceService.IProductoService;
import com.example.ShoeStore.models.Producto;

import lombok.Data;

@RequestMapping("api/v1/Producto")
@RestController
@Data
public class ProductoController {

    private IProductoService ProductoService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Producto") Producto Producto) {

        // verificar que el campo documento de identidad sea diferente vacio
        // Añadir campos obligatorios
        // no cambiar nada

        if (Producto.getNombreproducto().equals("")) {

            return new ResponseEntity<>("El nombre del producto es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getDescripcion().equals("")) {

            return new ResponseEntity<>("La descripcion es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getCantidad().equals("")) {

            return new ResponseEntity<>("La cantidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }
        
        if (Producto.getPrecio().equals("")) {

            return new ResponseEntity<>("El precio es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getPorcentajeiva().equals("")) {

            return new ResponseEntity<>("El porcentaje de iva es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getPorcentajedescuento().equals("")) {

            return new ResponseEntity<>("El porcentaje de descuento es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getEstado().equals("")) {

            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        // todo bien
        ProductoService.save(Producto);
        return new ResponseEntity<>(Producto, HttpStatus.OK);

    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaProducto = ProductoService.findAll();
        return new ResponseEntity<>(listaProducto, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltro/{nombreproducto}")
    public ResponseEntity<Object> findnombreproducto(@PathVariable String nombreproducto) {
        var listaProducto = ProductoService.filtrarnombreproducto(nombreproducto);
        return new ResponseEntity<>(listaProducto, HttpStatus.OK);
    }

    @GetMapping("/filtrarestado/{estado}")
    public ResponseEntity<Object> findEstado(@PathVariable char estado) {
        var listaProducto = ProductoService.filtrarestado(estado);
        return new ResponseEntity<>(listaProducto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Producto = ProductoService.findOne(id);
        return new ResponseEntity<>(Producto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var Producto = ProductoService.findOne(id).get();
        if (Producto != null) {
            if (Producto.getEstado().equals("H")) {

                Producto.setEstado("D");
                ProductoService.save(Producto);
                return new ResponseEntity<>("Se ha deshabilitado correctamente", HttpStatus.OK);
            } else
                Producto.setEstado("H");
            ProductoService.save(Producto);
            return new ResponseEntity<>("Se ha habilitado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Producto") Producto ProductoUpdate) {
        var Producto = ProductoService.findOne(id).get();
        if (Producto != null) {

            Producto.setNombreproducto(ProductoUpdate.getNombreproducto());
            Producto.setDescripcion(ProductoUpdate.getDescripcion());
            Producto.setCantidad(ProductoUpdate.getCantidad());
            Producto.setPrecio(ProductoUpdate.getPrecio());
            Producto.setPorcentajeiva(ProductoUpdate.getPorcentajeiva());
            Producto.setPorcentajedescuento(ProductoUpdate.getPorcentajedescuento());
            Producto.setEstado(ProductoUpdate.getEstado());

            ProductoService.save(Producto);
            return new ResponseEntity<>(Producto, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Producto NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}
