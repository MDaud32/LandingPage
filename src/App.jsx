import logo from './images/logo.svg';
function App() {
  return (
    <div className="">
      <div id="hero">
        <div className="max-w-6xl mx-auto container px-6 py-12 md:px-0">
          {/* navbar and logo */}
          <nav className="flex justify-between">
            {/* logo */}
            <img src={logo} alt="" className="" />
            {/* menu */}
            <div className="hidden font-alata md:flex md:space-x-8 text-white">
              <div className="group">
                <a href="" className="">
                  About
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="" className="">
                  Careers
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="" className="">
                  Events
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="" className="">
                  Products
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="" className="">
                  Suppots
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </nav>
          <div className="md:text-6xl text-3xl text-white p-4 py-10 items-left md:items-center uppercase md:max-w-lg max-w-sm border border-white my-36 ">
            impressive experiences that deliver
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
