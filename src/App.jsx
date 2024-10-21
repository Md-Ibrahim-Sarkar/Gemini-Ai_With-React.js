import Main from "./Components/Main/Main"
import Sidebar from "./Components/Sideber/Sideber"


function App() {
  return (
    <div className="flex h-screen max-[640px]:h-auto">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App