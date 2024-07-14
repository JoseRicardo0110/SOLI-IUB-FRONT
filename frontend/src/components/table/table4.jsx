
import { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import DownloadIcon from '@mui/icons-material/GetApp';
import ViewColumnIcon from '@mui/icons-material/DynamicFeed';
const url = "https://soli-iub-fastapi.onrender.com";
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});


function Table4() {
  

  const [users, setUsers] = useState([]);

  const get_SolicitudesPendientes = async () => {
    try {
      const users = await axios.get(`${url}/get_SolicitudesPendientes/`);
      const dato = await users.data.resultado;
      console.log(dato);
      console.log("toy dentro");
      setUsers(dato);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_SolicitudesPendientes();
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
    {
      name: "NombreAsignado",
      label:"persona Asignada",
    },
    {
      name: "Asunto",
      label:"Asunto",
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

export default Table4;
