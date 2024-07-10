
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


function Table9() {


  const   handlelogin= async() => {
    var IdArea = parseInt(document.getElementById("user_IdArea").value);
    var usuario = document.getElementById("user_usuario").value;
    var nombre = document.getElementById("user_nombre").value;
    var documento = document.getElementById("user_documento").value;
    var contrasena = document.getElementById("user_contrasena").value;
    var apellido = document.getElementById("user_apellido").value;
    var telefono = document.getElementById("user_telefono").value;
    var correo = document.getElementById("user_correo").value;
    console.log("El usuaio es :",documento);
    axios({
      method: "post",
      url: `${url}/create_user`,
      data: {
        IdArea: IdArea,
        usuario: usuario,
        contrasena: contrasena,
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        telefono: telefono,
        correo: correo
      },
    });
    
    alert('Haz creado al usuario: '+usuario+'\ncontraseña: '+contrasena+'\nNombre : '+nombre+'\nApellido : '+apellido+'\nDocumento : '+documento+'\nTelefono : '+telefono);
    window.location.href = window.location.href;

  };

  

  const [users, setUsers] = useState([]);

  const get_SolicitudesSinAsignarr = async () => {
    try {
      const users = await axios.get(`${url}/get_users`);
      const dato = await users.data.resultado;
      console.log(dato);
      console.log("toy dentro");
      setUsers(dato);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_SolicitudesSinAsignarr();
  }, []);

  //tomo informacion de la base de datos y la almaceno en el arreglo 'users'
  const columns = [
    {
      name: "usuario",
      label: "Usuario",
    },
    {
      name: "contrasena",
      label:"contraseña",
    },
    {
      name: "nombre",
      label:"Nombre"
    },
    {
      name: "apellido",
      label:"Apellido",
    },
    {
      name: "documento",
      label:"No. documento",
    },
    {
      name: "teléfono",
      label:"Telefono"
    }
  ];

  const options = {
    filterType: "dropdown",
    responsive: "simple",
    tableBodyHeight: "500px",
    rowsPerPage: 8,
    downloadBtn:"false"
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
        <button type="button" class="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Agregar Usuario
        </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content ">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Crea un nuevo usuario</b></h1>
                <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class= "row">
                  <div class="col">
                  <label class="form-label text-primary"><b>Nombre de usuario</b></label>
                <input
                  class="form-control mb-2 bg-light"
                  type="text"
                  id="user_usuario"
                />
                <label class="form-label text-primary"> <b>Nombre</b></label>
                <input
                  class="form-control mb-2 bg-light"
                  type="text"
                  id="user_nombre"
                /> 
                <label class="form-label text-primary"><b>No. documento</b></label>
                <input
                  class="form-control mb-2 bg-light"
                  type="text"
                  id="user_documento"
                />
                <label class="form-label text-primary"><b>Area</b></label>
                                        <select class="form-select" id="user_IdArea">
                                            <option selected>Selecciona el tipo de solicitud</option>
                                            <option value="1">Telematica</option>
                                            <option value="2">Tecnico electromecanico</option>
                                            <option value="3">Administración de empresas</option>
                                            <option value="4">Administración de negocios internacionales</option>
                                        </select>
                  </div>
                  <div class="col">
                  <label class="form-label text-primary"><b>Contraseña</b></label>
                <input
                  class="form-control mb-2 bg-light"
                  type="text"
                  id="user_contrasena"
                />
                <label class="form-label text-primary"><b>Apellido</b></label>
                <input
                  class="form-control mb-2 bg-light"
                  type="text"
                  id="user_apellido"
                /> 
                <label class="form-label text-primary"><b>Telefono</b></label>
                <input
                  class="form-control mb-2 bg-light"
                  type="text"
                  id="user_telefono"
                /> 
                <label class="form-label text-primary"><b>Correo</b></label>
                <input
                  class="form-control mb-2 bg-light"
                  type="text"
                  id="user_correo"
                /> 
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                
                <button onClick={handlelogin} type="button" class="btn btn-primary">Listo</button>
              </div>
            </div>
          </div>
        </div>
        <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"Usuarios"}
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

export default Table9;
