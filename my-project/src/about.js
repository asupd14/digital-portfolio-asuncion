export default function about() {
  return `
      <section about>
        <div first container class="flex flex-col md:flex-row items-center gap-8 my-18 md:my-25 mx-4 md:mx-8">

           <div introduction container class="flex flex-col gap-3 md:gap-4 w-full md:w-1/2">

             <h1 class="text-[#E8EAED] text-3xl md:text-4xl lg:text-5xl font-semibold">Hello, my name is</h1>
             
             <h1 class="text-[#FF6B6B] text-3xl md:text-4xl lg:text-5xl font-semibold">Asunción Peña</h1>
             
             <div class="bg-[#302530] rounded-4xl p-3 md:p-4 border border-[#2E3340] mr-0 md:mr-auto inline-block text-center">
              <h2 class="text-[#E8EAED] text-lg md:text-xl font-semibold">Software Developer</h2>
             </div>
             
             <p class="text-[#9BA1B0] text-base md:text-lg font-regular">I have a strong focus on Full Stack development and cloud-based systems. I enjoy building realiable, and 
             user-focused digital solutions by working across both front-end and back-end technologies.</p>

             <div class="flex gap-3 md:gap-4">
               <a href="mailto:asuncion.pena.de@gmail.com" class="bg-[#22252F] p-3 md:p-4 border border-[#2E3340] rounded-2xl glow-link">
               <img src="/images/email.svg" alt="email icon" class="w-6 h-6 md:w-8 md:h-8 inline-block">
               </a>
               <a href="https://www.linkedin.com/in/asunci%C3%B3n-pe%C3%B1a-390917253/" class="bg-[#22252F] p-3 md:p-4 border border-[#2E3340] rounded-2xl glow-link">
               <img src="/images/linkedln.svg" alt="linkedln icon" class="w-6 h-6 md:w-8 md:h-8 inline-block">
               </a>
               <a href="https://github.com/AsuncionPD" class="bg-[#22252F] p-3 md:p-4 border border-[#2E3340] rounded-2xl glow-link">
               <img src="/images/github.svg" alt="github icon" class="w-6 h-6 md:w-8 md:h-8 inline-block">
               </a>
             </div>
           </div>
           <div my-photo container class="w-full md:w-1/2 display flex justify-center">
              <img src="/images/me.jpg" alt="photo of me" class="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover img-glow-bottom">
           </div>

        </div>

        <div personal-info container class="flex flex-col gap-8 my-8 md:my-12 mx-4 md:mx-8">
           <div academic container class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl">
              <h2 class="text-2xl md:text-4xl font-semibold mb-5">About me</h2>
              <p class="font-regular">
              I am a Computer Science and Multimedia student at the University of Costa Rica (UCR), currently pursuing a degree with a specialization in user experience (UX). I am passionate about technology and constantly motivated to learn and explore new areas within this field. Through my academic experience, I have developed a strong interest in software development, web technologies, and understanding how digital systems interact to create meaningful solutions. I enjoy continuously improving my technical and problem-solving skills while working on projects that combine functionality with thoughtful user experience.
              </p>
           </div>
           <div outside container class="text-[#E8EAED] bg-[#302530] p-4 md:p-6 border border-[#2E3340] rounded-2xl">
              <div class="flex items-center gap-3 mb-5 md:gap-3">
                <img src="/images/creative.svg" alt=" icon" class="w-6 h-6 md:w-10 md:h-10 inline-block">
                <h3 class="text-xl md:text-2xl font-semibold">Outside of work:</h3>
              </div>
              <p class="font-regular">
              I enjoy spending my time watching series, movies, and anime, especially stories related to animation and fantasy. I also like listening to music, reading, and drawing, as creative activities help me relax and stay inspired. In my free time, I enjoy exercising and spending time with my pet. I’m naturally curious and love learning about different topics that catch my interest, including technology, art, culture, cooking, and well-being.
              </p>
           </div>
        </div>
      </section>
  `;
}
