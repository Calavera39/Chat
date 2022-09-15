import Navbar from "./components/Navbar";

import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from "./components/Chat";
import React from "react";

const style = {
  appContainer: `md:max-w-[728px] w-full mx-auto text-center`,
  sectionContainer: `flex flex-col md:h-[90vh] h-screen bg-gray-100 md:mt-10 mt-0 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth)
  console.log(user)




  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
          <Navbar/>
          
          {user ? <Chat /> : <p className="my-20 font-bold">Please Sign in to get access in the Chat</p>}
      </section>
     
    </div>
  );
}

export default App;
