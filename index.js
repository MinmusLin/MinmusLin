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
  <img src='assets/MeowClorox.gif' height='30' width='30'/>
  Hi there my No.
  <img src='https://profile-counter.glitch.me/MinmusLin/count.svg'/>
  visitor!
</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

### 👨‍💻 About Me

* I’m Jishen Lin, an undergraduate student majoring in Software Engineering with a focus on Machine Intelligence at the School of Computer Science and Technology, [Tongji University](https://www.tongji.edu.cn).

* I am passionate about full-stack development and committed to practicing elegant engineering solutions.

* I enjoy collaborating with diverse teams to explore cutting-edge technologies and solve real-world problems through innovative and efficient solutions.

* With experience in full-stack development, AI research, and open-source projects, I am always seeking new challenges and opportunities to learn and grow.

* Feel free to reach out if you’d like to discuss ideas or explore new possibilities in tech innovation! [Click here](https://minmuslin.github.io) to visit my homepage!

### 🔬 Technical Skills

* 💻 **Programming Languages**: C/C++, C#, Java, Python, HTML, CSS, JavaScript, TypeScript, Dart, SQL, Swift, Rust

* 🧰 **Frameworks and Libraries**: Node, Vue, Spring Boot, Cocos2d-x, Qt, Flutter, OpenCV, SwiftUI

* 📈 **Data Analysis**: PyTorch, TensorFlow, Scikit-learn, NumPy, Matplotlib

* 🛠️ **Development Tools**: Git, CMake, Makefile, Docker, Linux, Shell, Bash, LaTeX, Typst

### 📊 My GitHub

<div align='center'>
  <img src='https://github-readme-stats.vercel.app/api?username=MinmusLin&show_icons=true&count_private=true' height='190'/>
  <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=MinmusLin&layout=compact' height='190'/>
</div>

### 🥰 Take a look at my repositories and let's get in touch!\
`

console.log(readme)
