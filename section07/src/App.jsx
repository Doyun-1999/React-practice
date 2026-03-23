import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'

import { useState, useEffect, useRef} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 두번째 인수가 변경되면, sideEffect로 1번째 인자에 영향을줌!
  const isMount = useRef(false);

  // 1. 마운트
  useEffect( ()=> {
    console.log("마운트")
  }, [])

  //2. 업데이트
  useEffect( ()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update")
  })

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
      <div className='App'>
        <h1>Simple Counter</h1>
        <section>
          <input
          value={input}
          onChange={(e)=>{
              setInput(e.target.value);
          }}
          />
        </section>

        <section>
          <Viewer count = {count}></Viewer>
          {count % 2 == 0 ? <Even></Even> : null}
    </section>

        <section>
          <Controller onClickButton={onClickButton}/>
        </section>
        
      </div>
  )
}

export default App
