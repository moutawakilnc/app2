
import { Admin, Resource,ListGuesser, List } from "react-admin";
import ListAdmin from "./listAdmin";

import { dataProvider } from "./dataProvider";



const Appback = () => (
<Admin dataProvider={dataProvider}>
    <Resource name="admins" list={ListGuesser}/>
</Admin>);

export default Appback;


