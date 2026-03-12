import './style.css'
import { setupCounter } from './counter.js'
import header from './header.js'
import about from './about.js'
import skills from './skills.js'
import works from './works.js'    

document.querySelector('#app').innerHTML = `
  <div>
    ${header()}
    <main>
      ${about()}
      ${skills()}
      ${works()}
    </main>
  </div>
`
setupCounter(document.querySelector('#counter'))
