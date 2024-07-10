
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


function Table3() {


  const   handlelogin= async() => {
    var id = parseInt(document.getElementById("ID").value);
    var idusuario = parseInt(localStorage.getItem("usuario"));
    var nombre = localStorage.getItem("Nombre");
    console.log("El id de la solicitud es :",id);
    console.log("El id del usuario es :",idusuario);
    console.log("El nombre de el usuario es :",nombre);
    var hoy = new Date();
    var dia = hoy.getDate();
    var mes = hoy.getMonth() + 1; 
    var año = hoy.getFullYear();
    var FechaUltimaModificacion = dia+"/"+mes+"/"+año;
    var correo = await API.notificar1(id);
    console.log(correo);
    API.asignate(id,idusuario,nombre,FechaUltimaModificacion,correo);
    alert('Haz sido asignado a la solicitud: '+ id);
    window.location.href = window.location.href;

  };

  

  const [users, setUsers] = useState([]);

  const get_SolicitudesSinAsignarr = async () => {
    try {
      const users = await axios.get(`${url}/get_SolicitudesSinAsignar/`);
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
      name: "",
      label:"persona Asignada",
    }, */
    {
      name: "Asunto",
      label:"Asunto"
    },
    {
      name: "FechaCreacion",
      label:"Fecha de creacion",
    },
    {
      name: "FechaUltimaModificacion",
      label:"Ultima modificacion",
    },
    {
      name: "estado",
      label:"Estado de la solicitud"
    },
    {
      name: "prioridad",
      label:"Prioridad"
    },
  ];

  const options = {
    filterType: "dropdown",
    responsive: "simple",
    tableBodyHeight: "500px",
    rowsPerPage: 5,
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
          Tomar Solicitud
        </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5>selecciona el id de la solicitud que deceas tomar</h5>
                <select class="form-select" id="ID" aria-label="Default select example">
                  <option selected></option>
                  {users.map((Usuarios) => (
                    <option key={Usuarios.idSolicitud}>
                      <option value="{Usuarios.idSolicitud}">{`${Usuarios.idSolicitud}`}</option>
                  </option>
                  ))}
                </select>
                
              </div>
              <div class="modal-footer">
                
                <button onClick={handlelogin} type="button" class="btn btn-primary">Tomar solicitud</button>
              </div>
            </div>
          </div>
        </div>
        <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"ACME Employee list"}
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

export default Table3;
