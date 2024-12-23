import Content from "./Content"
import Navbar from "./Navbar"

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-full h-full">
        <Navbar />
        <Content />
    </div>
  )
}

export default Main