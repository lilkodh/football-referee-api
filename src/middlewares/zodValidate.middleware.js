const zodValidate = (schema) =>{
    return (req,res,next) =>{
  const result = schema.safeParse(req.body);
 
  if (!result.success){
     const errors = {};
     for(const issue of result.error.issues){
      errors[issue.path[0]]= issue.message;
     }
       return res.status(400).json({
        message: "Validation failed.",
       errors: errors ,
        
    });
  }
  req.body = result.data;
  next();
    }
}
module.exports = zodValidate;