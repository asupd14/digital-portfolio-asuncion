import { projects } from './data-projects.js'
import header from './header.js'
function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search)
  return params.get('id')
}

function getProjectById(id) {
  return projects.find(project => project.id === id)
}

export default function theProject() {
  const projectId = getProjectIdFromUrl()
  const project = projectId ? getProjectById(projectId) : null

  if (!project) {
    return `
      <div>
        ${header()}
        <main class="min-h-screen flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-semibold text-[#E8EAED] mb-4">Project Not Found</h1>
            <button onclick="window.location.href='/'" class="bg-[#FF6B6B] px-6 py-3 rounded-full text-[#E8EAED] font-medium">
              Back to Home
            </button>
          </div>
        </main>
      </div>
    `
  }

  return `
    <div>
      ${header()}
      <main class="min-h-screen py-12 md:py-20 px-4 md:px-8">
        <!-- Back Button -->
        <button onclick="window.location.href='/#works'" class="flex items-center gap-2 text-[#9BA1B0] hover:text-[#E8EAED] mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Projects</span>
        </button>

        <!-- Project Title -->
        <h1 class="text-4xl md:text-5xl font-semibold text-[#E8EAED] mb-8">${project.title}</h1>

        <!-- Image and Description Container -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Image -->
          <div class="order-2 lg:order-1">
            <img 
              src="${project.image}" 
              alt="${project.title}" 
              class="w-full h-auto rounded-2xl object-cover border border-[#2E3340]"
            >
          </div>

          <!-- Description -->
          <div class="order-1 lg:order-2">
            <p class="text-base md:text-lg text-[#9BA1B0] leading-relaxed mb-8">
              ${project.description}
            </p>

            <!-- Additional Project Info -->
            <div class="space-y-4">
              ${project.role ? `
                <div class="flex items-center gap-4">
                  <span class="text-sm text-[#FF6B6B] font-semibold uppercase">Role:</span>
                  <span class="text-sm text-[#E8EAED]">${project.role}</span>
                </div>
              ` : ''}

              ${project.duration ? `
                <div class="flex items-center gap-4">
                  <span class="text-sm text-[#FF6B6B] font-semibold uppercase">Duration:</span>
                  <span class="text-sm text-[#E8EAED]">${project.duration}</span>
                </div>
              ` : ''}

              ${project.year ? `
                <div class="flex items-center gap-4">
                  <span class="text-sm text-[#FF6B6B] font-semibold uppercase">Year:</span>
                  <span class="text-sm text-[#E8EAED]">${project.year}</span>
                </div>
              ` : ''}

              ${project.technologies && project.technologies.length > 0 ? `
                <div class="pt-4">
                  <span class="text-sm text-[#FF6B6B] font-semibold uppercase block mb-3">Technologies:</span>
                  <div class="flex flex-wrap gap-2">
                    ${project.technologies.map(tech => `
                      <span class="text-xs text-[#9BA1B0] font-medium bg-[#2A2D3A] px-3 py-2 rounded-full border border-[#2E3340] whitespace-nowrap">
                        ${tech}
                      </span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Links -->
              <div class="flex gap-4 pt-6">
                ${project.github ? `
                  <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="bg-[#2A2D3A] px-4 py-2 rounded-full border border-[#2E3340] text-[#E8EAED] hover:bg-[#3A3D4A] transition-colors">
                    GitHub
                  </a>
                ` : ''}
                ${project.link ? `
                  <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="bg-[#FF6B6B] px-4 py-2 rounded-full text-[#E8EAED] glow-link">
                    View Live
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
}

