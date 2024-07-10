
import { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import * as API from "../../ruta";
import DownloadIcon from '@mui/icons-material/GetApp';
import ViewColumnIcon from '@mui/icons-material/DynamicFeed';
const url = "http://127.0.0.1:8000";
const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});



function Table6() {


    const   handlerespuesta= async () => {
        var id = parseInt(document.getElementById("ID").value);
        console.log("El id de la solicitud es :",id)
        var texto = document.getElementById("floatingTextarea2").value;
        console.log(texto);
        var  mostrar = await API.consultar_solicitud(id);
        var hoy = new Date();
        var dia = hoy.getDate();
        var mes = hoy.getMonth() + 1; 
        var año = hoy.getFullYear();
        var FechaUltimaModificacion = dia+"/"+mes+"/"+año;
        var total = mostrar+"\n "+"\n"+texto+"."+FechaUltimaModificacion+"/"
        console.log(total);
        var correo = await API.notificar1(id);
        console.log(correo);
        var envio = await API.responder(id, total,correo, FechaUltimaModificacion);
        console.log(envio);

        /* API.asignate(id,idusuario);*/
        window.location.href = window.location.href;
    };
    const   Finalizar_caso= async () => {
        var id = parseInt(document.getElementById("IDFIN").value);
        console.log("Se finalizará el :",id)
        
        var hoy = new Date();
        var dia = hoy.getDate();
        var mes = hoy.getMonth() + 1; 
        var año = hoy.getFullYear();
        var FechaUltimaModificacion = dia+"/"+mes+"/"+año;
        var correo = await API.notificar1(id);
        console.log(correo);
        var envio = await API.finalizar_solicitud(id,FechaUltimaModificacion,correo);
        console.log(envio);

        window.location.href = window.location.href;

    };
    


    const [users, setUsers] = useState([]);

    var idusuario = parseInt(localStorage.getItem("usuario"));
    console.log(idusuario);
    var get_SolicitudesPendientesPorIdPersonaA = async (idasignado) => {
        try {
            const users = await axios.get(`${url}/get_SolicitudesPendientesPorIdPersonaAsignada/${idasignado}`);
            const dato = await users.data;
            console.log(dato);
            console.log("toy dentro");
            setUsers(dato);
        } catch (error) {
        console.error(error);
        }
    };

    
    
    useEffect(() => {
        get_SolicitudesPendientesPorIdPersonaA(idusuario);
    }, []);

  //tomo informacion de la base de datos y la almaceno en el arreglo 'users'
    const columns = [
        {
            name: "idSolicitud",
            label: "ID solicitud",
        },
        {
            name: "nombre",
            label: "Estudiante",
        },
        {
            name: "valor",
            label:"Tipo Solicitud",
        },
        /* {
            name: "NombreAsignado",
            label:"persona Asignada",
        }, */
        {
            name: "Asunto",
            label:" Asunto ",
        },
        {
            name: "FechaCreacion",
            label:"fecha de creacion",
        },
        {
            name: "FechaUltimaModificacion",
            label:"Ultima modificacion",
        },
        {
            name: "estado",
            label:"Estado de la solicitud"
        },
        /* {
            name: "prioridad",
            label:"Prioridad",
        }, */
        {
            name: "DescripcionRespuesta",
            label:"Respuestas",
        },
    ];

    const options = {
    filterType: "dropdown",
    responsive: "vertical",
    tableBodyHeight: "500px",
    rowsPerPage: 5,
    };
    console.log()
    const components = {
    icons: {
        DownloadIcon,
        ViewColumnIcon,
    }
    };


    return (
    <div >
        <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Responder solicitud
        </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header  ">
                    <h1 class="modal-title fs-5 text-primary" id="exampleModalLabel">Respuesta</h1>
                    <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                    <h5>Selecciona el id de la solicitud que desea responder</h5>
                    <select class="form-select" id="ID" aria-label="Default select example">
                        <option selected></option>
                        {users.map((Usuarios) => (
                            <option key={Usuarios.idSolicitud}>
                            <option value="{Usuarios.idSolicitud}">{`${Usuarios.idSolicitud}`}</option>
                        </option>
                        ))}
                    </select>
                    <h5 class="mt-3">Escribe la respuesta que quieres dar</h5>
                    <div class="form-floating mt-3 ">
                        <textarea class="form-control htext" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Comentario</label>
                    </div>
                    </div>
                    <div class="derecha fondofo">
                    
                    <button onClick={handlerespuesta} type="button" class="btn btn-success">Dar respuesta</button>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#exampleModa2">
            Finalizar solicitud
        </button>


        <div class="modal fade" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header  ">
                    <h1 class="modal-title fs-5 text-success" id="exampleModalLabel">Respuesta</h1>
                    <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                        <h5>Selecciona el id de la solicitud que deseas finalizar</h5>
                        <select class="form-select" id="IDFIN" aria-label="Default select example">
                            <option selected></option>
                            {users.map((Usuarios) => (
                                <option key={Usuarios.idSolicitud}>
                                <option value="{Usuarios.idSolicitud}">{`${Usuarios.idSolicitud}`}</option>
                            </option>
                            ))}
                        </select>
                    </div>
                    <div class="derecha bg-success">
                    
                        <button onClick={Finalizar_caso} type="button" class="btn btn-outline-light">Finalizar</button>
                    </div>
                </div>
            </div>
        </div>
        <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}>
        <MUIDataTable
            title={"Tus Solicitudes Pendientes"}
            data={users}
            columns={columns}
            options={options}
            components={components}
        />
        </ThemeProvider>
        </CacheProvider>
    </div>
    
    
    );
}

export default Table6;
