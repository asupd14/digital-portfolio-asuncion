export default function header() {
  return `
    <header class="flex flex-col sm:flex-row justify-between items-center text-[#E8EAED] p-4 border-b border-[#2E3340]">
      <div class="flex items-center mb-2 sm:mb-0">
        <img src="/images/me.jpg" alt="photo of me" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2">
        <h1 class="text-lg font-semibold">Asunción Peña</h1>
      </div>
      <nav class="font-medium flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="/Documents/cv-asuncion-pena-fullstack.pdf" download class="glow-link p-[10px_12px] rounded-full">Download CV</a>
      </nav>
    </header>
  `;
}
