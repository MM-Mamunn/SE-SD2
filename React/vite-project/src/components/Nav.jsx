import React from 'react'

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur-md">
  {/* Logo / Brand */}
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
      B
    </div>
    <span className="text-xl font-semibold tracking-tight text-gray-900">
      BrandName
    </span>
  </div>

  {/* Navigation Links */}
  <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
    <li>
      <a href="#home" className="transition-colors hover:text-indigo-600">
        Home
      </a>
    </li>
    <li>
      <a href="#features" className="transition-colors hover:text-indigo-600">
        Features
      </a>
    </li>
    <li>
      <a href="#pricing" className="transition-colors hover:text-indigo-600">
        Pricing
      </a>
    </li>
    <li>
      <a href="#about" className="transition-colors hover:text-indigo-600">
        About
      </a>
    </li>
  </ul>

  {/* Call to Action */}
  <div className="flex items-center gap-3">
    <a
      href="#login"
      className="hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-indigo-600"
    >
      Log in
    </a>
    <a
      href="#signup"
      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
    >
      Get Started
    </a>
  </div>
</nav>
  )
}

export default Nav
