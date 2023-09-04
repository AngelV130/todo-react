import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../config/firebase"

export const logging = ({email,password}:User) => signInWithEmailAndPassword(auth,email,password)

export const register = ({email,password}:User) => createUserWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);