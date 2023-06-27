import React, { useState} from 'react';
import './Login.css';
import Title from './components/Title/Tilte';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

const Login = () => {

     const [user, setUser]= useState('');
     const [password, setPassword] = useState('');
     const [passwordError, setPasswordError] = useState(false);
     const [isLogin, setIsLogin] = useState(false);
     const [hasError, setHasErrror] = useState(false);

    function handleChange(name, value){
        if(name === 'usuario') {
            setUser(value)
            setHasErrror(false);
        } else {
            if(value < 6 ) {
            setPassword(true);
            setHasErrror(false);
        } else {
           setPasswordError(false);
           setPassword(value)
           setHasErrror(false);
        }
      }
    };
    

    function ifMatch(param){
        if(param.user.length > 0 && param.password.length> 0){
            if (param.user === 'Linda' && param.password==='123456'){
                const {user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else{
                setIsLogin(false);
                setHasErrror(true);
            }
        }else {
          setIsLogin(false);
          setHasErrror(true);
        }
    }

     function handleSubmit() {
        let account = { user, password }
        if(account) {
            ifMatch( account)
        }
     };

    return (
        <div className='login-container'> 
           <div className='login-content'>
            { isLogin ? 
                 <div className='home-container'>
                 <h1>Hola,{user}</h1>
                 <label>Gracias, estás logueada</label>
                 </div>
                :
           <Title text='Bienvenido!'/>
           { hasError &&
           <label className='label-alert'>
            Su contraseña o usuario son incorrectos, o no existen en nuestra plataforma.
           </label>
           }
           <Label text='Usuario'/>
           <Input
           attribute={{
               id:'usuario',
               name:'usuario',
               type:'text',
               placeholder:'Ingrese su usuario'
           }}
           handleChange={handleChange}
           />
           <Label text='Contraseña'/>
           <Input
           attribute={{
               id: 'contraseña',
               name:'contraseña',
               type:'password',
               placeholder:'Ingrese su contraseña'
           }}
           handleChange={handleChange}
           param={passwordError}
            />
            { passwordError && 
            <label className='label-error'>
                  Contraseña invalida o incompleta
            </label>
            }
           <div className='submit-button-container'>
           <button onClick={handleSubmit} className='submit-button-container'>
              Ingresar
           </button>
           </div>
          </div>
          }
       </div>
    )
};

export default Login;