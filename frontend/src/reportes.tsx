import {Datagrid, List, TextField} from "react-admin";

export const listarReporte=()=>(
 <List>
  <Datagrid>
   <TextField source="id" label="folio"/>
   <TextField source="paramedico"/>
   <TextField source="nivel"/>
  </Datagrid>
 </List>
);
