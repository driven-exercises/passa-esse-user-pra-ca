import userSchema from "../schemas/userSchema";

export default function userSchemaValidationMiddleware(req, res, next) {
  const validation = userSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}