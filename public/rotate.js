

document.addEventListener("mousemove", function(e) {
  const x = e.pageX
  const y = e.pageY

  const midX = x - window.innerWidth / 2
  const midY = y - window.innerHeight / 2

  const box = document.querySelector("section")

  box.style.left = x + "px"
  box.style.top = y + "px"

  box.style.transform = "rotateX(" + (midY * 0.2) + "deg) rotateY("+ (midX * 0.4) +"deg)"
})
