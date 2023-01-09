import React from "react";
import './Soporte.css';
import { useState } from "react";

const Soporte = () => {
 
    const [input, setInput] = useState({
        name:"",
        email:"",
        coments:"",
        
    })
    
    const [error, setError] = useState({
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const validate = (input) => {
        let error = {};

        let expRegName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let expRegEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let expRegComents = /^.{1,255}$/;

        if(!input.name.trim()){
            error.name ="El campo 'Nombre' es requerido";
        }else if(!expRegName.test(input.name.trim())){
            error.name = "Solo se acepta letras"
        }
        if(!input.email.trim()){
            error.email ="El campo 'Email' es requerido";
        }else if(!expRegEmail.test(input.email.trim())){
            error.email = "Email invalido"
        }
        if(!input.coments.trim()){
            error.coments ="El campo 'Comentarios' es requerido";
        }else if(!expRegComents.test(input.coments.trim())){
            error.coments = "Debe ser un maximo de 255 caracteres"
        }
        return error;
    }

    function  handleBlur(e) {
        handleChange(e)
        setError(validate(input))
    }
    
    let styles = {
        fontWeight: "bold",
        color:"#dc3545"
    }

    function handleSubmit(e) {
        e.preventDefault();

        setError(validate(input))
    
        alert("Enviado")
        setInput({
            name:"",
            email:"",
            coments:"",
            
        })
    }


    return (
        <div className="soporte-vista">
                <div className="titulo">
                    <h1>Soporte</h1>
                </div>
            <form className="form-soporte" onSubmit={e => handleSubmit(e)}>


                <div>
                    <input 
                     className="input-text"
                     type={'text'} onChange={handleChange}
                     name='name'
                     value={input.name} 
                     onBlur={handleBlur}  
                     placeholder="Escriba su nombre"
                      />
                      {error.name && <p style={styles}>{error.name}</p>}
                    <input 
                     className="input-text" 
                     type={'text'} onChange={handleChange} 
                     name='email'
                     value={input.email}
                     onBlur={handleBlur} 
                     placeholder="Escriba su email" 
                     />
                     {error.email && <p style={styles}>{error.email}</p>}
                    <textarea 
                     className="input-text" 
                     cols='40' 
                     rows='5' 
                     name='coments'
                     value={input.coments}
                     onChange={handleChange} 
                     onBlur={handleBlur} 
                     placeholder="Escribe tus comentarios"
                     />
                     {error.coments && <p style={styles}>{error.coments}</p>}
                    <button className="botton">Enviar</button>
                </div>

            </form>


        </div>
        )
}

export default Soporte