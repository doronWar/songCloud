const basicInfo = {
  email: "",
  password: "",
  canAccess: false
}

export default function userInfoReduce(curentInfo = basicInfo, action) {


  switch (action.type) {
    case 'SET_USER_MAIL':
      return Object.assign({}, curentInfo, {email: action.email});
      break;
    case 'SET_USER_PASSWORD':
      return Object.assign({}, curentInfo, {password: action.password});
      break;
    case 'ACCESS_GRANTED':
      return Object.assign({}, curentInfo, {canAccess: true});
      break;
    case 'ACCESS_DENIED':
      return Object.assign({}, curentInfo, {canAccess: false});
      break;
    case 'RESET_INFO':
      return Object.assign({}, curentInfo, {canAccess: false, password: "", email: ""});
      break;
  }


  return curentInfo;
}

