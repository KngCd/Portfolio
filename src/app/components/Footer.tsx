export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Let's Connect
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
            <a
              href="mailto:panaligankingcedrick@gmail.com"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              panaligankingcedrick@gmail.com
            </a>
            <a
              href="https://github.com/KngCd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              GitHub: KngCd
            </a>
            <a
              href="https://www.linkedin.com/in/king-cedrick-panaligan-8a6a4534a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/kng_cdrck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>© {currentYear} King Cedrick C. Panaligan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}