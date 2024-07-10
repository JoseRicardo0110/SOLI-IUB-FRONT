import { useEffect, useState } from "react";
import * as API from "../ruta";

import Table2 from "../components/table/table2";
import NavbarPrueba from "../components/navbar/navbarprueba";
import Table3 from "../components/table/tabla3";
import Lateral1 from "../components/navbar/lateral1";


export function Prueba() {
  API.get_users();

  const [lista, setUsers] = useState([]);
  useEffect(() => {
    API.get_users().then(setUsers);
  }, []);
  var hoy = new Date();
  var dia = hoy.getDate();
  var mes = hoy.getMonth() + 1; 
  var año = hoy.getFullYear();
  var fecha = dia+"/"+mes+"/"+año;
  
  return (
      <div class="">
         {lista.map((Usuarios) => (
              <div key={Usuarios.id}>
                <h1>nombre: {Usuarios.nombre}</h1>
              </div>
              
            ))}
            <h1>{fecha}</h1>

        
        
      </div>
  );
}
