export default function Hero() {
  return (
    <section id="main-content" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          I'm a passionate developer creating beautiful, accessible, and functional web experiences.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
