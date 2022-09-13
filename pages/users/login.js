import Layout from "../../components/layout";
import SecFooter from "../../components/secFooter";
import style from '../../styles/login.module.css'

export default function Login(){
    return (
        <>
        <Layout/>
        <div className="formHeader">
        <h3 className={style.titleForm}>Inciar sesión</h3>
        <h4 className={style.community}>¿Aún no tienes una cuenta? <a href="/users/register">Unite a la comunidad</a></h4>
      </div>

      <main class={style.loginForm}>
            <form action="/users/login" method="POST">
              <div class={style.inputForm}>
              <input type="email" name="email" placeholder="Email" id="inputEmail"/>
              <span class="valid-register" id="email-login"></span>
            </div>

            <div class={style.inputForm}>
              <input type="password" name="password" placeholder="Contraseña" id="inputPassword"/>
              <span class="valid-register" id="password-login"></span>
            </div>

            <div class={style.formCookie}>
              <div>
              <label class="remb" htmlFor="remb">Recordar</label>
              <input type="checkbox" id={style.remb} name="remember"/>
            </div>
              <label><a href="">¿Has olvidado tu contraseña?</a></label>
            </div>
            <br/>
            <div class={style.formBtnSend}>
              <button type="submit">Ingresar</button>
            </div>
            </form>
           
          </main>
        <section className={style.preFooter}></section>
        <SecFooter/>
       </> 
      
    )
}