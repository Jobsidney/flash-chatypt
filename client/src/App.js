import logo from './logo.svg';
import './App.css';
import SvgComponent from './components/SvgComponent';

function App() {
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
            <div className='message'> Hello world</div>
          </div>

        </div>
        <div className='pt-[24px] '>
          <div className='chat-message  flex flex-row items-center space-x-4 bg-[#444654] px-[150px] p-4 text-lg'>
            <div className='avator bg-[#0da37f] rounded-md items-center flex flex-col justify-center w-[50px] h-[50px]'>
              <SvgComponent/>
            </div>
            <div className='message'> Hello world</div>
          </div>

        </div>


        <div className='chatInputHolder items-center   absolute bottom-6 justify-center flex flex-row'>
          {/* <input type="text" className='bg-[#40414f]' /> */}
          <textarea name="" id="" rows='1' className='bg-[#40414f] border-0 outline-none  w-full rounded-[5px]  items-center justify-start px-3 py-[12px] text-lg'  ></textarea>

        </div>

      </section>
      
    </div>
  );
}

export default App;
