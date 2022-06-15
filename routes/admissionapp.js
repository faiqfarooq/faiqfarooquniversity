import express from "express";
import { getadmissiondata,postadmissiondata,refToken,tokenverification,deleteadmissiondata ,getUser,userlogin,updateadmissiondata} from "../controller/admissionapp.js";

const router=express.Router();

router.get("/showregstudent",getadmissiondata);
router.post("/registrstudent",postadmissiondata);

router.delete("/showregstudent/:id",deleteadmissiondata);
router.put("/showregstudent/:id",updateadmissiondata);
router.post("/sign-form",userlogin);
router.get("/user",tokenverification,getUser);
router.get("/refresh",refToken,tokenverification,getUser)

export default router;