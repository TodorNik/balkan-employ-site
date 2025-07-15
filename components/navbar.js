import "@/app/globals.css";

export default function Navbar() {
    return (
      <nav class="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold">MyLogo</div>
              <div className="hidden md:flex space-x-4 ml-10">
                <a href="@/page.js" className="hover:text-gray-300">Home</a>
                <a href="@/about/page.js" className="hover:text-gray-300">About</a>
                <a href="@/contact/page.js" className="hover:text-gray-300">Contact</a>
                <a href="#" className="hover:text-gray-300">Profile</a>
                <a href="#" className="hover:text-gray-300">Logout</a>        
              </div>
            </div>

            
            <div className="md:hidden">
              <button className="text-gray-400 hover:text-white">
                <span className="sr-only">Open menu</span>
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  