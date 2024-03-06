const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = '▇'.repeat(passedProgressBarIndex) + '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `[ ${progressBar} ]`
}

const readme = `\
<h1>
  <img src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430" height="30"/>
  Hi there my No.
  <img src="https://profile-counter.glitch.me/MinmusLin/count.svg" height="30"/>
  visitor!
</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

* 🚀 I'm Jishen Lin, an undergraduate student of School of Software Engineering, Tongji University.

* 🌱 I’m currently learning software engineering and exploring new technologies.

* 🔭 I love collaborating on interesting tech projects and connecting with like-minded individuals.

* 📫 Email: minmuslin@outlook.com

* 💬 WeChat: MinmusLin

<div>
  <img src="https://github-readme-stats.vercel.app/api?username=MinmusLin&show_icons=true&theme=tokyonight&count_private=true" height="190"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MinmusLin&theme=tokyonight&layout=compact" height="190"/>
</div>

<p>
  <a href="https://adityaprasad.eu.org" rel="nofollow">
    <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" style="max-width:100%">
  </a>
</p>

_Take a look at my repositories and let's get in touch!_ 🥰

<p>
  <a href="https://adityaprasad.eu.org" rel="nofollow">
    <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" style="max-width:100%">
  </a>
</p>\
`

console.log(readme)
