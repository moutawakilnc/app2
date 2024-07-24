import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const DatagridTextView = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <Link href={record[source]} >
            {record[source]}{console.log(record)}
            <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>
    ) : null;
};

export default DatagridTextView;