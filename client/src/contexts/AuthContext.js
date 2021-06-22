import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { useCookies } from 'react-cookie';

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
        setCookie('token', '', {});
      } else {
        const token = await user.getIdToken();
        const expires = new Date();
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
        setCurrentUser(user);
        // setCookie('token', token, {
        //   path: '/',
        //   expires,
        //   maxAge: 1000,
        //   // domain: 'localhost',
        //   //secure: true,
        //   // httpOnly: true,
        //   // sameSite: 'strict',
        // });
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
