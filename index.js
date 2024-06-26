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

### 👨‍💻 *[About Me](https://minmuslin.github.io)*

* 🚀 I'm Jishen Lin, an undergraduate student of [School of Software Engineering](https://sse.tongji.edu.cn), [Tongji University](https://www.tongji.edu.cn).

* 🌱 I’m currently learning software engineering and exploring new technologies.

* 🔭 I love collaborating on interesting tech projects and connecting with like-minded individuals.

* 📫 Email: minmuslin@outlook.com

* 💬 WeChat: MinmusLin

### 🔬 *Technology Stack*

* 💻 Programming Languages: C/C++, C#, Python, HTML, CSS, JavaScript, TypeScript, Dart, Java, SQL

* 🧰 Frameworks and Libraries: Vue/Vite, Cocos2d-x, Qt, Flutter, PyTorch, TensorFlow, Scikit-learn, OpenCV

* 🛠️ Development Tools: Git, CMake, Makefile, Docker, Linux, LaTeX

### 📊 *[My GitHub](https://github.com/MinmusLin)*

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=MinmusLin&show_icons=true&count_private=true" height="190"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MinmusLin&layout=compact" height="190"/>
</div>

<p align="center">
  <img width="100%" src="assets/Snake.svg"/>
</p>

### 🥰 *Take a look at my repositories and let's get in touch!*\
`

console.log(readme)
