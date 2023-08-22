const Validation = (error) => {
    const regexName =  /^(?!.*\s{2})[a-zA-Z0-9\s]{2,18}$/;;
    const regexDescription = /^.{10,}$/;
    const regexStock = /^[1-9]\d*$/;
    const regexValoration = /^[1-9][0-9]?$|^100$/;
  
    let err = {};
  
    if (!regexName.test(error.name)) {
      err.name = "Introduzca un nombre válido";
    }
    if (error.price === "") {
      err.price = "El precio es requerido.";
    } else if (isNaN(error.price) || parseFloat(error.price) <= 0) {
      err.price = "El precio debe ser un número válido y mayor que cero.";
    }
    if (!regexDescription.test(error.description)) {
      err.description = "La descripción debe tener al menos 10 caracteres.";
    }
    if (!regexStock.test(error.stock)) {
      err.stock = "El stock debe ser un número entero positivo.";
    }
    if (!regexValoration.test(error.valoration)) {
      err.valoration = "La valoración debe estar entre 1 y 100.";
    }
    if (!error.category) {
      err.category = "La categoría es requerida.";
    }
    if (error.image === ""){
      err.image = "Debe agregar una Imagen"
    }else if (!/.(gif|jpeg|jpg|png)$/i.test(error.img) && error.image !== "") { err.image = "Debe ser una URL de imagen con formato jpg, gif, png!"}

    return err;
  };
  
  export default Validation;