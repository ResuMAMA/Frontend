import React from "react";

function toggleForm(e) {
    e.preventDefault();
  const container = document.querySelector('.container');
  container.classList.toggle('active');
}

function closelogin(){
    const element = document.getElementById("myNav");
    element.style.width = "0%";
  }


async function register (e){

  e.preventDefault();
console.log(e.emailuser);
  e.preventDefault();
    const response = await fetch(`https://localhost:8080/auth/register/`,{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
           },
        body:JSON.stringify({
            "email":e.emailuser,
            "username":e.usernameuser,
            "password":e.passworduser
        })
        });
if(response.status==200){  
const data = await response.json();
console.log(data);
}
else {
  console.log("error");
}
      
}


async function loginuser(e){
  e.preventDefault();
  const response = await fetch(`https://localhost:8080/auth/login/`,{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
           },
        body:JSON.stringify({
            "email":e.email,
            "password":e.password
        })
        });
if(response.status==200){  
const Data = await response.json();
console.log(Data);
const realData = Data.data;
window.localStorage.setItem ("token",realData.token);
window.localStorage.setItem ("userid",realData.id);
console.log(window.localStorage.getItem("token"));
}
else {
    console.log("error");
}        
}



function Login() {
  return (
    <div class="overlay" id="myNav">
    <a class="closebtn" onClick={closelogin}>&times;</a>
    <section>
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="/img/temprem.png"
              alt=""
            />
          </div>
          <div className="formBx">
            <form onsubmit={loginuser}>
              <h2>Log In</h2>
              <input type="email" name="email" placeholder="email" />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <p class="signup">
                Don't have an account ?
                <a onClick={toggleForm}>
                  Sign Up.
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form onsubmit={register}>
              <h2>Create an account</h2>
              <input type="text" name="usernameuser" placeholder="Username" />
              <input type="email" name="emailuser" placeholder="Email Address" />
              <input type="password" name="passworduser" placeholder="Create Password" />
              <input type="submit" name="" value="Sign Up" />
              <p class="signup">
                Already have an account ?
                <a onClick={toggleForm}>
                  Sign in.
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="/img/temprem.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Login;
