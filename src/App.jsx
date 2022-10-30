import logo from './images/logo.svg';
import intractive from './images/desktop/image-interactive.jpg';
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
      {/* interactive vr */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-36 px-6 relative container md:px-0">
        <img src={intractive} alt="" className="" />
        <div className="top-48 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="text-4xl max-w-lg mb-6 mt-10 text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            THE LEADER IN INTERACTIVE VR
          </h2>
          <p className="text-gray-900 max-w-md">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
