import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState([]);
    const googleProvider = new GoogleAuthProvider();

    // get current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    // create user by signup 
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //login user by google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }

    //logout user
    const logout = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const authInfo = {
        user,
        loading,
        signup,
        login,
        logout,
        updateUserProfile,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;