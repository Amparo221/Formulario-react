import React from 'react';
import './Form.css'

function Form() {
    
    return (
        <>
        <form>
        <h2>
            Formulario
        </h2>
        <div class="form_input">
            <label>Nombre:
                <input type="text" name="name" placeholder="Ingrese su nombre"></input>
            </label> 
        </div>
        <div class="form_input">
            <label>Apellido:
                <input type="text" name="surname" placeholder="Ingrese su apellido"></input>
            </label> 
        </div>
        <div class="form_input">
            <label>Email:
                <input type="email" name="email" placeholder="Ingrese su email"></input>
            </label> 
        </div>
        <div class="form_input">
            <label>Tel:
                <input type="tel" name="cellphone" placeholder="Ingrese su telefono"></input>
            </label> 
        </div>
        <div class="form_input">
            <label>Contraseña:
                <input type="password" name="password" placeholder="Ingrese su contraseña"></input>
            </label> 
        </div>
        <div class="form_input">
            <label>Confirmar contraseña:
                <input type="password" name="confirmPassword" placeholder="Ingrese su contraseña"></input>
            </label> 
        </div>
        <div  class="submit_container">
            <input class="submit_button" type="submit" value="Enviar"></input>
        </div>
        




    </form>
        </>
    )
}

export default Form;