export const getRequiredMessage=(fieldName:string)=>`${fieldName} is required`;

export const EMAIL_VALIDATION={required:'Email is required',
  pattern:{
    value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
    message: "Invalid Email"
  }
}

export const USERNAME_VALIDATION={
  required:'UserName is required',
  pattern:{
    value:/^[a-z0-9]{1,8}$/
,
    message: "Invalid User Name"
  }
}
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d?[a-z])(?=\S*?[0-9]).{6,})\S$
// 
const PasswordRegEx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

export const PasswordValidation=(fieldName:string)=>{
  return{
    required: getRequiredMessage(fieldName),
    pattern:{
      value: PasswordRegEx,
      message:"At least 6 characters: UPPER/lowercase, numbers and special characters"
    }
  }
}