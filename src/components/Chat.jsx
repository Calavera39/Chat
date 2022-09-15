import { onSnapshot, orderBy, query, QuerySnapshot, collection } from 'firebase/firestore'
import React, {useState, useEffect, useRef} from 'react'
import { Message } from './Message'
import { db } from '../firebase'
import { SendMessage } from './SendMessage'
import { Oval } from 'react-loader-spinner'



const Chat = () => {
  const [messages, setMessages] = useState([])
  const [loading, setIsLoading] = useState(false)

  const scroll = useRef()

  useEffect(() => {
    setIsLoading(true)
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsucscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = []
      QuerySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id})
      });
      console.log(messages)
      setIsLoading(false)
      setMessages(messages)
    })
    return () => unsucscribe()
  }, [])

  const msg =  messages && messages.map((message) => (
    <Message key={message.id} message={message}/>
  ))

  return (
   <div>
     <main className='flex flex-col p-[10px] overflow-auto mb-[50px] '>
      {loading ? <Oval color="#191731" secondaryColor="#1c2ea0"/> : msg}
      <SendMessage scroll={scroll}/>
    </main>

    <span ref={scroll}></span>
   </div>
  )
}

export default Chat