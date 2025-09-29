import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import {listarReporte} from "./reportes"
export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="reportes"
      list={listarReporte}
    />
  </Admin>
);
