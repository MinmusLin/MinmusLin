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
  <img src='assets/MeowClorox.gif' height='30'/>
  Hi there my No.
  <img src='https://profile-counter.glitch.me/MinmusLin/count.svg' height='30'/>
  visitor!
</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

### 👨‍💻 *[About Me](https://minmuslin.github.io)*

* 🚀 I'm Jishen Lin, An undergraduate student of School of Computer Science and Technology, [Tongji University](https://www.tongji.edu.cn).

* 🌱 I’m currently learning software engineering and exploring new technologies.

* 🔭 I love collaborating on interesting tech projects and connecting with like-minded individuals.

* 📫 Email: minmuslin@outlook.com

* 💬 WeChat: MinmusLin

### 🔬 *Technology Stack*

* 💻 Programming Languages: C/C++, C#, Java, Python, HTML, CSS, JavaScript, TypeScript, Dart, SQL, Rust

* 🧰 Frameworks and Libraries: Node, Vue, Spring Boot, Cocos2d-x, Qt, Flutter, OpenCV

* 📈 Data Analysis: PyTorch, TensorFlow, Scikit-learn, NumPy, Matplotlib

* 🛠️ Development Tools: Git, CMake, Makefile, Docker, Linux, Shell, Bash, LaTeX, Typst

### 📊 *[My GitHub](https://github.com/MinmusLin)*

<div align='center'>
  <img src='https://github-readme-stats.vercel.app/api?username=MinmusLin&show_icons=true&count_private=true' height='190'/>
  <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=MinmusLin&layout=compact' height='190'/>
</div>

### 🥰 *Take a look at my repositories and let's get in touch!*\
`

console.log(readme)
