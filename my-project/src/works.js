export default function works() {
  return `
     <section my-works>
            <div title-description container class="text-[#E8EAED] flex flex-col items-center gap-8 my-18 md:my-25 mx-4 md:mx-8">
                <h1 class="text-6xl font-semibold">My Works</h1>
                <p class="text-lg text-[#9BA1B0] text-center">Projects that highlight my experience in full-stack development, web technologies, and building practical digital solutions.</p>
            </div>
    
            <div cards-works container class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 wrap gap-8 my-8 md:my-12 mx-4 md:mx-8">
                <div one-card container class="bg-[#22252F] rounded-2xl p-4 md:p-6 border border-[#2E3340] flex flex-col min-h-[480px]">
                    <image src="/images/Projects/Golden-dragon.png" alt="Project 1 Image" class="object-cover rounded-2xl cursor-pointer" onclick="window.location.href='/the-project.html?id=golden-dragon'">
                    <h4 class="text-sm text-[#FF6B6B] uppercase font-semibold mt-4">Web & Mobile App</h4>
                    <h3 class="text-[#E8EAED] mt-2 md:mt-2 text-2xl font-semibold cursor-pointer" onclick="window.location.href='/the-project.html?id=golden-dragon'">Golden Dragon</h3>
                    <p class="text-base text-[#9BA1B0] font-medium my-2">Chinese restaurant app for ordering food.</p>
                    <div class="flex flex-wrap gap-3 mt-auto pt-4">
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Problem Analysis</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">System Design</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Frontend & Backend Development</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Database Management</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">API Integration</p>
                    </div>
                    <button class="bg-[#FF6B6B] p-2 md:p-3 rounded-full border border-[#2E3340] w-full mt-4 text-[#E8EAED] font-medium glow-link cursor-pointer" onclick="window.location.href='/the-project.html?id=golden-dragon'">View Project</button>
                </div> 
            
    
                <div one-card container class="bg-[#22252F] rounded-2xl p-4 md:p-6 border border-[#2E3340] flex flex-col min-h-[480px]">
                    <image src="/images/Projects/CompuTrans.png" alt="Project 6 Image" class="object-cover rounded-2xl cursor-pointer" onclick="window.location.href='/the-project.html?id=about-computrans'">
                    <h4 class="text-sm text-[#FF6B6B] uppercase font-semibold mt-4">Service Design</h4>
                    <h3 class="text-[#E8EAED] mt-2 md:mt-2 text-2xl font-semibold cursor-pointer" onclick="window.location.href='/the-project.html?id=about-computrans'">About Us page for Computrans</h3>
                    <p class="text-base text-[#9BA1B0] font-medium my-2">Design and creation of the About Us page for Computrans Company.</p>
                    <div class="flex flex-wrap gap-3 mt-auto pt-4">
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Problem Analysis</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">System Design</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Frontend Development</p>
                    </div>
                    <button class="bg-[#FF6B6B] p-2 md:p-3 rounded-full border border-[#2E3340] w-full mt-4 text-[#E8EAED] font-medium glow-link cursor-pointer" onclick="window.location.href='/the-project.html?id=about-computrans'">View Project</button>
                </div> 
    
                <div one-card container class="bg-[#22252F] rounded-2xl p-4 md:p-6 border border-[#2E3340] flex flex-col min-h-[480px]">
                    <image src="/images/Projects/Escape.png" alt="Project 3 Image" class="object-cover rounded-2xl cursor-pointer" onclick="window.location.href='/the-project.html?id=escape'">
                    <h4 class="text-sm text-[#FF6B6B] uppercase font-semibold mt-4">Web & Mobile App</h4>
                    <h3 class="text-[#E8EAED] mt-2 md:mt-2 text-2xl font-semibold cursor-pointer" onclick="window.location.href='/the-project.html?id=escape'">Escape</h3>
                    <p class="text-base text-[#9BA1B0] font-medium my-2">A location-based web app that helps users discover and save favorite places.</p>
                     <div class="flex flex-wrap gap-3 mt-auto pt-4">
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Problem Analysis</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">System Design</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Frontend & Backend Development</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Database Management</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">API Integration</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Testing</p>
                    </div>
                    <button class="bg-[#FF6B6B] p-2 md:p-3 rounded-full border border-[#2E3340] w-full mt-4 text-[#E8EAED] font-medium glow-link cursor-pointer" onclick="window.location.href='/the-project.html?id=escape'">View Project</button>
                </div> 
    
                <div one-card container class="bg-[#22252F] rounded-2xl p-4 md:p-6 border border-[#2E3340] flex flex-col min-h-[480px]">
                    <image src="/images/Projects/AWS-slave-master-api.png" alt="Project 5 Image" class="object-cover rounded-2xl cursor-pointer" onclick="window.location.href='/the-project.html?id=aws-msp'">
                    <h4 class="text-sm text-[#FF6B6B] uppercase font-semibold mt-4">Cloud Architecture</h4>
                    <h3 class="text-[#E8EAED] mt-2 md:mt-2 text-2xl font-semibold cursor-pointer" onclick="window.location.href='/the-project.html?id=aws-msp'">AWS EC2 Slave-Master API</h3>
                    <p class="text-base text-[#9BA1B0] font-medium my-2">AWS cloud architecture with API development and MySQL master–slave replication.</p>
                     <div class="flex flex-wrap gap-3 mt-auto pt-4">
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Problem Analysis</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Backend Development</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Database Management</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">API Integration</p>
                        <p class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">Testing</p>
                    </div>
                    <button class="bg-[#FF6B6B] p-2 md:p-3 rounded-full border border-[#2E3340] w-full mt-4 text-[#E8EAED] font-medium glow-link cursor-pointer" onclick="window.location.href='/the-project.html?id=aws-msp'">View Project</button>
                </div>
            </div>
          </section>
  `;
}
