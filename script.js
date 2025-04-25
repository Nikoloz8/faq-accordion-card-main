let drops = document.querySelectorAll(".dropdown")
drops.forEach(e => {
    let img = e.querySelector("img")
    let p = e.querySelector("p")
    let h2 = e.querySelector("h2")
    e.addEventListener("click", () => {
        drops.forEach(drop => {
            let otherImg = drop.querySelector("img")
            let otherP = drop.querySelector("p")
            let otherH2 = drop.querySelector("h2")

            if (drop !== e) {
                otherH2.style.fontWeight = "400"
                otherImg.style.transform = "rotate(0deg)"
                otherP.style.display = "none"
                drop.style.height = "35px"
                otherP.style.opacity = "0"
            }
        })


        if (p.style.display === "none") {
            h2.style.fontWeight = "700"
            img.style.transform = "rotate(180deg)"
            p.style.display = "block"
            e.style.height = "70px"

            p.style.opacity = "0"

            let opacity = 0
            setTimeout(function(){
                let op = setInterval(function () {
                    opacity += 0.01
                    p.style.opacity = opacity

                    if (opacity >= 1) {
                        clearInterval(op)
                    }

                }, 10)
            }, 500)

        } else {
            h2.style.fontWeight = "400"
            img.style.transform = "rotate(0)"
            p.style.display = "none"
            e.style.height = "35px"
        }
    })
})