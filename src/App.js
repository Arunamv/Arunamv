import { useEffect, useState } from 'react';
import './App.css';

import Signin from './pages/signin/Signin';
import { auth } from './Firebase';
import Home1 from './Home1';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="App">
      {user ? <Home1 /> : <Signin />}

    </div>
  );
}

export default App;