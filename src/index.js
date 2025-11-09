import app from "./app.js";
/* function expression*/
const main  = () =>{
    app.listen(app.get("port"));
    console.log(`The Companys super web server is running on port ${app.get("port")}`)
}

main();