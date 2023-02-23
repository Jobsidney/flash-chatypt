import logo from './logo.svg';
import './App.css';
import SvgComponent from './components/SvgComponent';
import { RxPaperPlane } from 'react-icons/rx';
import { useState } from 'react';
import ChatMessage from './components/ChatMessage';


function App() {
  const [input,setInput]=useState('')
  const [chatLog,setChatLog] = useState([{
    message:'how can i help you'}
  ])
  async function handleSubmit(e){
    e.preventDefault()
   
    setChatLog([...chatLog,{message:`${input}`}])
    setInput("")
    //  console.log(input)
    const response=await fetch("http://localhost:4000",{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        message:chatLog.map((message)=>
          message.message
        )
      })
    })

    const data=await response.json();
    setChatLog([{message:`${data.message}`}])
    console.log(data.message);


  }
 
  return (
    <div className=" App-header flex flex-row w-screen">
      <aside className='w-[250px]  h-[100vh] bg-[#1c1f24] px-2 pt-4'>
        <div className='cursor-pointer p-2 border flex-row flex border-white items-center justify-center rounded-md hover:bg-white/20 hover:border-white/20'>
          New chat
        </div>
      </aside>
      <section className='flex-1 relative w-full  flex flex-col'>

        <div className='pt-[24px] '>
          <div className='chat-message  flex flex-row items-center space-x-4 px-[150px] p-4 text-lg'>
            <div className='avator bg-white rounded-md w-[50px] h-[50px]'></div>
            <div className='message'> {input}</div>
          </div>

        </div>
        {
          chatLog.map((message=><ChatMessage message={message}/>))
        }


        <div >
          {/* <input type="text" className='bg-[#40414f]' /> */}

          <form onSubmit={handleSubmit} className='chatInputHolder items-center   absolute bottom-6 justify-center flex flex-row space-x-2'>
            <input name="" input={input} onChange={(e)=>{
              setInput(e.target.value)
            }} rows='1' className='bg-[#40414f] border-0 outline-none  w-full rounded-[5px]  items-center justify-start px-3 py-[12px] text-lg'  />
            <button type='submit'><RxPaperPlane size={24}/></button>
          </form>
        </div>

      </section>
      
    </div>
  );
}

export default App;
