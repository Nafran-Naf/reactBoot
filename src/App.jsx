import React from 'react'
import DemoClass1 from './components/ClassDemo/DemoClass1'
import DemoFunction from './components/FunctionDemoComponent/DemoFunction'

function App() {
  return (
    // <> called fragments
    <>
     <DemoClass1/>
     <hr/>
     <DemoFunction/>
    </>
  )
}

export default App
