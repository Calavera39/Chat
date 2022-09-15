import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import React, {useState} from 'react'
import {auth, db} from '../firebase'

export const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if(input === '') {
            alert('Please enter a valid message')
            return
        }

        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }


  return (
    <form onSubmit={sendMessage} className='h-14 w-full flex text-xl absolute bottom-0 left-0 right-0'>
        <input value={input} onChange={(e) => setInput(e.target.value)} className='w-full text-xl p-3 bg-gray-900 text-white outline-none border-none' type='text' placeholder='Message'/>
        <button className='w-[20%] bg-green-500' type='submit'>Send</button>
    </form>
  )
}
