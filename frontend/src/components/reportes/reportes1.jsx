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
const url = "https://soli-iub-fastapi.onrender.com";
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});


function Reportes1() {

  return (
      <div > 
        



        
      </div>
  );
}

export default Reportes1;
