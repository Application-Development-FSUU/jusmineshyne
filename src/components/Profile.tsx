export default function Profile() {
  return (
    <section id="profile" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <img
              src="/profile.jpg"
              alt="Profile picture of Jusmine Shyne"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I'm Jusmine Shyne
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I build beautiful, accessible, and performant web experiences that users love. Let's create something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 font-semibold inline-flex items-center gap-2"
          >
            View My Work <span>→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
