const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = "▇".repeat(passedProgressBarIndex) + "▁".repeat(progressBarCapacity - passedProgressBarIndex)
    return `[ ${progressBar} ]`
}

const readme = `\
<h1>
  👋 Hi there, I'm Jishen Lin!
</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

### 👨‍💻 About Me ([Blog](https://www.minmuslin.cn), [CV](https://raw.githubusercontent.com/MinmusLin/MinmusLin.github.io/main/docs/public/cv/cv.pdf))

* 💻 Full-stack development enthusiast passionate about solving real-world problems through elegant engineering practices
* 🛒 Backend Software Engineer Intern @ Douyin E-Commerce, ByteDance (ByteIntern Program)
* 🎓 B.Eng. in Software Engineering @ School of Computer Science and Technology, Tongji University
* 🏆 ​​iGEM 2024 Gold Medalist​​ (Software & AI Track) - Led software and wiki development as Tech Lead
* 🔍 Thrives on technical challenges and collaborative problem-solving to create impactful solutions
* 🌱 Continuously learning and growing, with endless curiosity about emerging technologies and best practices

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=MinmusLin&show_icons=true&count_private=true&rank_icon=github&hide=issues&line_height=24"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MinmusLin&layout=compact&hide=Jupyter%20Notebook,TeX"/>
</div>
`

console.log(readme)
