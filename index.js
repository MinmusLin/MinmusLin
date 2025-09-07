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

const readme = `<h1>👋 Hi there, I'm Jishen Lin!</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

### 👨‍💻 About Me ([Blog](https://www.minmuslin.cn), [Lark](https://www.larkoffice.com/invitation/page/add_contact/?token=154v9ded-7060-4f8d-a18c-1ca756b04766), [CV](https://www.minmuslin.cn/cv/cv.pdf))

* 💻 Full-stack development enthusiast passionate about solving real-world problems through elegant engineering practices
* 🛒 Backend Software Engineer @ Douyin Group, ByteDance
* 🎓 B.Eng. in Software Engineering @ School of Computer Science and Technology, Tongji University
* 🏆 ​​iGEM 2024 Gold Medalist​​ (Software & AI Track) - Led software and wiki development as Tech Lead
* 🔍 Thrives on technical challenges and collaborative problem-solving to create impactful solutions
* 🌱 Continuously learning and growing, with endless curiosity about emerging technologies and best practices

### 📊 My GitHub

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=MinmusLin&show_icons=true&count_private=true&rank_icon=github&line_height=27&custom_title=GitHub%20Stats&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage" style="height: 360px"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MinmusLin&layout=compact&hide=jupyter%20notebook&langs_count=20" style="height: 360px"/>
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/MinmusLin/MinmusLin/output/contribution-animation.svg"/>
</div>

### ⏱️ My WakaTime

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/wakatime?username=MinmusLin&layout=compact"/>
</div>

---

> “Elegance in programming is not a dispensable luxury, but a factor that determines success or failure. Elegance is not a matter of aesthetics or a question of fashionable taste — it can be translated into viable techniques.”
>
> “程序的优雅性不是可以或缺的奢侈品，而是决定成功还是失败的一个要素。优雅并不是一个美学的问题，也不是一个时尚品味的问题，优雅能够被翻译成可行的技术。”
`

console.log(readme)
