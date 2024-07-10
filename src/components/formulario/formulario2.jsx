import React from "react";
import {} from "react-bootstrap";
import { useNavigate } from "react-router";
import * as API from "../../ruta";




export default function Formulario2() {
    const handlelogin = () => {
    var selectElement = document.getElementById('autoSizingSelect');
    var selectedValue = selectElement.value;
    /* var checkElement = document.getElementById('autoSizingSelect2');
    var checkValue = checkElement.value; */
    var floatingElement = document.getElementById('floatingTextarea');
    var floatingValue = floatingElement.value;
    var idusuario = parseInt(localStorage.getItem("usuario"));
    console.log(selectedValue);
    console.log(floatingValue);
    console.log(idusuario);
    API.Crea_Solicitud(idusuario,selectedValue,floatingValue);
    alert('Se Creo tu solicitud')
    window.location.href = window.location.href;

    };
    return (
        <main class="mb-5">
            <div class="container mt-5">  
                <div class="row container ">
                    <div class="col-md-6">
                        <div class="card card-body bg-light">
                            <div id="vtorre2" >
                                <form class="ps-3">
                                    <div class="mb-3">
                                        <label class="form-label text-primary">Tipo de solicitud</label>
                                        <select class="form-select" id="autoSizingSelect">
                                            <option selected>Selecciona el tipo de solicitud</option>
                                            <option value="1">Créditos únicos</option>
                                            <option value="2">Créditos adicionales</option>
                                            <option value="3">Matricula</option>
                                            <option value="4">Retiro de modulos</option>
                                            <option value="5">Cambio de grupo</option>
                                            <option value="6">Transferencia internas</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label text-primary">Archivo</label>
                                        <input type="file" class="form-control" id="inputGroupFile01"/>
                                    </div>

                                    <div class="mb-3 ">
                                    <label class="form-label text-primary">Medio de notificacion</label>
                                        <select class="form-select" id="autoSizingSelect2">
                                            <option selected>Selecciona el metodo de notificacion</option>
                                            <option value="1">Whatsapp</option>
                                            <option value="2">Correo electronico</option>
                                        </select>
                                    </div>

                                    <div class="mb-3 text-primary">
                                        <label class="form-label">Detalles de la solicitud</label>
                                        <textarea class="form-control " placeholder="descripcion" id="floatingTextarea"></textarea>    
                                    </div>
                                    <div class="mb-2">
                                    <button
                                        class="btn btn-primary w-100  mt-4 fw-semibold shadow-sm"
                                        type="button"
                                        onClick={handlelogin}>
                                        Iniciar sesión
                                    </button>
                                    </div>
                                </form>   
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="ms-3 ">
                            <img src="../picture/comunicado.avif" class=" img-fluid rounded-circle d-block img2" alt="" srcset=""/>
                            <h5 class=" mb-4 text-light textobimg"><strong>Crea una solicitud </strong></h5>
                        </div>
                    </div>
                </div>
            </div>     
        </main>
    );
}
