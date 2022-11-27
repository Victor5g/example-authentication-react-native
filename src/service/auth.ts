 type ResponseUser = {
  token: string;
  user: {
    email: string;
    name: string;
  }
 }


export const signIn = ():Promise<ResponseUser> =>{
  return new Promise(resolve=> {
    setTimeout(()=>{
      resolve({
        token:"ZmdnZ2dnZ2dnZ2dnZ2dyZ3RndGd0Z3Q=",
        user:{
          name:"Morramidy",
          email:"morramidy@development.com.br"
        },
      });
    }, 1000)
  })
}