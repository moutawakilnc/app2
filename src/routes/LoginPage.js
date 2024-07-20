


export default function LoginPage()
{
    
    return (<div class="w-50">
            <form className="form">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="text" className="form-control"/>
                </div>
                <button type="submit" class="btn bt-primary" >Se connecter</button>
            </form>
        </div>);
}