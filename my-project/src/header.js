export default function header() {
  return `
    <header class="display flex justify-between text-[#E8EAED] p-4 border-b border-[#2E3340]">
     <div class="flex items-center">
      <img src="/images/me.jpg" alt="photo of me" class="w-12 h-12 rounded-full mr-2">
      <h1 class="text-lg font-semibold">Asunción Peña</h1>
      </div>
      <nav class="font-medium flex space-x-4">
        <!--<a href="#about" class="glow-link p-[10px_12px] rounded-full">About</a>
        <a href="#projects" class="glow-link p-[10px_12px] rounded-full">Skills</a>
        <a href="#contact" class="glow-link p-[10px_12px] rounded-full">Project</a>-->
        <a href="/Documents/cv-asuncion-pena-fullstack.pdf" download class="glow-link p-[10px_12px] rounded-full">Dowload CV</a>
      </nav>
    </header>
  `;
}
