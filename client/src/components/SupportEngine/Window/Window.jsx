import React, {useState} from 'react'
import {styles} from "../styles"
import EmailWindow from './EmailWindow'
import ChatEngine from './ChatEngine'

const Window = props => {
    //state variables
    const [user,setUser] = useState(null);
    const [chat,setChat] = useState(null);


  return (
    <div
    className='transition-3'
    style={{
        ...styles.supportWindow,
        ...{ opacity:props.visible? "1":"0" } 
    }}>

        <EmailWindow 
        setUser = { user => setUser(user) }
        setChat = { chat => setChat(chat) }
        visible = { user === null || chat === null }
        />

        <ChatEngine
        visible={user !== null && chat !== null}
        user={user}
        chat={chat}
        />
      
    </div>
  )
}

export default Window
 