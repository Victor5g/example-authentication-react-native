export type AuthContextData = {
  signed:boolean;
  user:User | null;
  loading:boolean;
  signIn():Promise<void>;
  signOut():void;
 }

 export type User = {
  name:string;
  email:string;
 }