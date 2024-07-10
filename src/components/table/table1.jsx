
import { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import DownloadIcon from '@mui/icons-material/GetApp';
import ViewColumnIcon from '@mui/icons-material/DynamicFeed';
const url = "http://127.0.0.1:8000";
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});


function Table1() {
  

  const [users, setUsers] = useState([]);

  var idusuario = parseInt(localStorage.getItem("usuario"));
  console.log(idusuario);
  const get_SolicitudesFinalizadasPorIdUs = async (idUsuario) => {
    try {
      const users = await axios.get(`${url}/get_SolicitudesFinalizadasPorIdUsuario/${idUsuario}`);
      const dato = await users.data;
      console.log(dato);
      console.log("toy dentro");
      setUsers(dato);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_SolicitudesFinalizadasPorIdUs(idusuario);
  }, []);

  //tomo informacion de la base de datos y la almaceno en el arreglo 'users'
  const columns = [
    {
      name: "idSolicitud",
      label: "ID solicitud",
      
    },
    /* {
      name: "nombre",
      label: "Estudiante",
    }, */
    {
      name: "valor",
      label:"Tipo Solicitud",
    },
    {
      name: "NombreAsignado",
      label:"persona Asignada",
    },
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
    tableBodyHeight: "468px",
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

export default Table1;
