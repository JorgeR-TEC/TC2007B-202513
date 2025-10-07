import {Admin,Resource, CustomRoutes} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import {listarReporte, crearReporte, editarReporte} from "./reportes"
import {Route} from "react-router-dom"
import Registrarse from "./registrarse";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="reportes"
      list={listarReporte} create={crearReporte} edit={editarReporte}
    />
    <CustomRoutes>
      <Route path="/registrarse" element={<Registrarse />}/>
    </CustomRoutes>

  </Admin>
);
