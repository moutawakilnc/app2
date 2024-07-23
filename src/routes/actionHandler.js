
import { redirect } from "react-router";

export const majInscriptionAction= async ({request})=>
{
    const id=await request.formData();
    

    const payload=Object.fromEntries(id.entries());

    return redirect("/editer");
}