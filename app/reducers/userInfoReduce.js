
const basicInfo={
  email:"",
  password:"",
  canAccess:false
}

export default function userInfoReduce(curentInfo=basicInfo, action) {

  if(action.type==='SET_USER_MAIL'){

    return Object.assign({}, curentInfo, {email: action.email});
  }
  if(action.type==='SET_USER_PASSWORD'){
    return Object.assign({}, curentInfo, {password: action.password});
  }
  if(action.type==='ACCESS_GRANTED'){
    return Object.assign({}, curentInfo, {canAccess: true});
  }



  return curentInfo;
}

