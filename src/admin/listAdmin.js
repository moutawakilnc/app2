import { useContext } from "react";
import { List,Datagrid, TextField , ListContext, useListContext, useRecordContext, useArrayInput, useResourceContext, useDataProvider, useDatagridContext} from "react-admin";
import { Link } from "@mui/material";
import DatagridTextView from "./datagridTextView";

export  const ListAdmin =()=>{


return(<List> 
        <Datagrid> 
        
            <TextField source="id"/>
            
        </Datagrid>
        </List>
)


}

export default ListAdmin;