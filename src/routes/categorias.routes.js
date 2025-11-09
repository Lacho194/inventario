import {Router} from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

/* creamos el enrutador */
const router = Router();

/*configuramso respuesta desde server metodo httpget*/
router.get("/", categoriaController.getCategorias)

/* hacemos disponible al router en toda la app*/
export default router;