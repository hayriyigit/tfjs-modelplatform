import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
          '$1'
        );
        try {
          await axios
            .get(`http://localhost:8001/auth?token=${token}`)
            .then(async (res) => {
              await auth.signInWithCustomToken(res.data.token).then((user) => {
                setCurrentUser(user);
              });
            })
            .catch((e) => {
              setCurrentUser(null);
            });
        } catch (e) {
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(user);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
