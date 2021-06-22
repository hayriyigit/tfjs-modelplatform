import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(['token']);

  const signup = async (email, password, username) => {
    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (creds) => {
        return await creds.user.updateProfile({
          displayName: username,
        });
      });
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    setCurrentUser(null);
    return auth.signOut();
  };
  const resetPassword = async (email) => {
    return await auth.sendPasswordResetEmail(email);
  };

  const updatePassword = async (password) => {
    return await currentUser.updatePassword(password);
  };

  const updateUser = async (email, username) => {
    return await currentUser.updateProfile({
      email: email,
      displayName: username,
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
          '$1'
        );
        try {
          axios.get(`http://localhost:8001/auth?token=${token}`).then((res) => {
            auth.signInWithCustomToken(res.data.token);
          });
        } catch (e) {
          console.log(e);
        }
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updatePassword,
    updateUser,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
