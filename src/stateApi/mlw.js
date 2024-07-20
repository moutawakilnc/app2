

export const checkDate = (date) => {
    // logic here that can dispatch actions or read state
    let dateNaissance;
    try{ let day=date.getDate();
            let month=date.getMonth();
            let year=date.getFullYear();

            day=day<10?"0"+day:day;
            month=month<10?"0"+(month+1):month+1;

            dateNaissance=`${year}-${month}-${day}`;
      
    }
    catch(Exception)
    {
      dateNaissance="2000-01-01";
    }
    finally{ return dateNaissance}
  }
  
