async function Validate(){
    console.log("validating.....");
    const userId=localStorage.getItem("userid");
    const token=localStorage.getItem("token");
    if((!userId)||(!token))
    {
        console.log("user is not logged In");
        
    }    
}
export default Validate