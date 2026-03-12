export default function skills() {
  return `
  <section skills>
       <div title-description container class="text-[#E8EAED] flex flex-col items-center gap-8 my-18 md:my-25 mx-4 md:mx-8">
        <h1 class="text-6xl font-semibold">My Skills</h1>
        <p class="text-lg text-[#9BA1B0] text-center">Core competencies I've developed through coursework, projects, and continuous learning.</p>
       </div>

        <div cards container class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 md:my-12 mx-4 md:mx-8">

          <div class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl min-h-72">
              <div class="flex items-center gap-3 md:gap-4"> 
                  <div class="bg-[#302530] p-3 md:p-4 border border-[#2E3340] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <img src="/images/problem.svg" alt="problem icon" class="w-8 h-8 md:w-10 md:h-10">
                  </div>
                  <h3 class="text-lg md:text-2xl font-semibold">Problem Analysis</h3>
              </div>
              <p class="font-regular text-[#9BA1B0] mt-8 md:mt-4">Understanding requirements, analyzing problems, and translating ideas into technical solutions and system functionality.</p>
          </div>

          <div class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl min-h-72">
              <div class="flex items-center gap-3 md:gap-4"> 
                  <div class="bg-[#302530] p-3 md:p-4 border border-[#2E3340] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <img src="/images/design.svg" alt="design icon" class="w-8 h-8 md:w-10 md:h-10">
                  </div>
                  <h3 class="text-lg md:text-2xl font-semibold">System Design</h3>
              </div>
              <p class="font-regular text-[#9BA1B0] mt-8 md:mt-4">Planning the structure of applications, defining how frontend, backend, databases, and APIs interact to support scalable and maintainable systems.</p>
          </div>

          <div class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl min-h-72">
              <div class="flex items-center gap-3 md:gap-4"> 
                  <div class="bg-[#302530] p-3 md:p-4 border border-[#2E3340] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <img src="/images/frontend.svg" alt="frontend icon" class="w-8 h-8 md:w-10 md:h-10">
                  </div>
                  <h3 class="text-lg md:text-2xl font-semibold">Frontend Development</h3>
              </div>
              <p class="font-regular text-[#9BA1B0] mt-8 md:mt-4">Building responsive and interactive user interfaces using technologies such as HTML, CSS, JavaScript, and React.</p>
          </div>

          <div class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl min-h-72">
              <div class="flex items-center gap-3 md:gap-4"> 
                  <div class="bg-[#302530] p-3 md:p-4 border border-[#2E3340] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <img src="/images/backend.svg" alt="backend icon" class="w-8 h-8 md:w-10 md:h-10">
                  </div>
                  <h3 class="text-lg md:text-2xl font-semibold">Backend Development</h3>
              </div>
              <p class="font-regular text-[#9BA1B0] mt-8 md:mt-4">Developing server-side functionality, handling business logic, and managing database interactions using frameworks such as Laravel and ASP.NET.</p>
          </div>

          <div class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl min-h-72">
              <div class="flex items-center gap-3 md:gap-4"> 
                  <div class="bg-[#302530] p-3 md:p-4 border border-[#2E3340] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <img src="/images/api.svg" alt="api icon" class="w-8 h-8 md:w-10 md:h-10">
                  </div>
                  <h3 class="text-lg md:text-2xl font-semibold">API Integration & Development</h3>
              </div>
              <p class="font-regular text-[#9BA1B0] mt-8 md:mt-4">Creating and integrating RESTful APIs to enable communication between frontend interfaces, backend services, and external systems.</p>
          </div>

          <div class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl min-h-72">
              <div class="flex items-center gap-3 md:gap-4"> 
                  <div class="bg-[#302530] p-3 md:p-4 border border-[#2E3340] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <img src="/images/database.svg" alt="database icon" class="w-8 h-8 md:w-10 md:h-10">
                  </div>
                  <h3 class="text-lg md:text-2xl font-semibold">Database Management</h3>
              </div>
              <p class="font-regular text-[#9BA1B0] mt-8 md:mt-4">Designing and managing relational databases, writing queries, and ensuring efficient data storage and retrieval.</p>
          </div>

          <div class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl min-h-72">
              <div class="flex items-center gap-3 md:gap-4"> 
                  <div class="bg-[#302530] p-3 md:p-4 border border-[#2E3340] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <img src="/images/test.svg" alt="test icon" class="w-8 h-8 md:w-10 md:h-10">
                  </div>
                  <h3 class="text-lg md:text-2xl font-semibold">Testing & Debugging</h3>
              </div>
              <p class="font-regular text-[#9BA1B0] mt-8 md:mt-4">Identifying, troubleshooting, and resolving issues through debugging and automated testing to ensure application reliability.</p>
          </div>

          <div class="text-[#E8EAED] bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl min-h-72">
              <div class="flex items-center gap-3 md:gap-4"> 
                  <div class="bg-[#302530] p-3 md:p-4 border border-[#2E3340] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <img src="/images/cloud.svg" alt="cloud icon" class="w-8 h-8 md:w-10 md:h-10">
                  </div>
                  <h3 class="text-lg md:text-2xl font-semibold">Cloud & Infrastructure</h3>
              </div>
              <p class="font-regular text-[#9BA1B0] mt-8 md:mt-4">Working with cloud-based environments and Linux servers to support application deployment, configuration, and system monitoring.</p>
          </div>

       </div>

       <div soft-skills container class="text-[#E8EAED] flex flex-col gap-8 my-18 md:my-25 mx-4 md:mx-8 bg-[#22252F] p-4 md:p-6 border border-[#2E3340] rounded-2xl"">
            <h3 class="text-2xl md:text-3xl font-semibold">Soft Skills</h3>

            <div class="flex flex-wrap gap-4">
                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Problem Solving</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Critical Thinking</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Adaptability</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Communication</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Teamwork</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Attention to Detail</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Empathy</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Active listening</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Time management</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Creative</p>
                </div>

                <div class="bg-[#2E3340] p-[10px_12px] rounded-full">
                    <p class="font-regular text-[#FF6B6B]">Continuous Learning</p>
                </div>
            </div>
        </div>
      </section>
  `;
}
















