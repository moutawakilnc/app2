
import { Admin, Resource,ListGuesser, List } from "react-admin";
import jsonapiClient from "ra-jsonapi-client";
import { DashboardMenuItem } from "react-admin";
import ListAdmin from "./listAdmin";
import DatagridTextView from "./datagridTextView";
import jsonServerProvider from 'ra-data-json-server';

const dataProvider=jsonServerProvider("https://api.mocki.io/v2/hjwzrxf2");




const Appback = () => <Admin dataProvider={dataProvider}>
    <Resource name="admins" list={ListAdmin} />
    
</Admin>;

export default Appback;


