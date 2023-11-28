import {body,validationResult} from "express-validator"

// valido el register
export const validateRegister = [
    body("username")
        .notEmpty()
        .withMessage("Username no debe estar vacio")
        .isLength({ min: 6 })
        .withMessage("Username no puede tener menos de 6 caracteres"),
    body("email")
        .notEmpty()
        .withMessage("Email no puede estar vacío")
        .isEmail()
        .withMessage("Email debe ser una dirección de correo válida"),
    body("password")
        .notEmpty()
        .withMessage("Password no debe estar vacío")
        .isLength({ min: 6 })
        .withMessage("El Password no puede tener menos de 6 caracteres"),
];

// valido el login
export const validateLogin = [
    body("email")
        .notEmpty()
        .withMessage("Email no puede estar vacío")
        .isEmail()
        .withMessage("Email debe ser una dirección de correo válida"),
    body("password")
        .notEmpty()
        .withMessage("Password no debe estar vacío")
        .isLength({ min: 6 })
        .withMessage("El Password no puede tener menos de 6 caracteres"),
];

export const handleErrorValidations = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        // return res
        // .status(400)
        // .json({ message: "Error en la validación de atributos", errors: errors.array() });
        
        // para evitar el error en la vista
        return res
        .status(400)
        .json([error.errors[0].msg])       
    }
    next();
};
