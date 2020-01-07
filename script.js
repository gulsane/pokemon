const parsedData = require("./pokemon")
parsedData.forEach(a => {
  console.log(`<div class="image_layout"><h2 class="name_font_style">${a.name}</h2><img src="${a.art_url}" alt="${a.name}" class="image_style"></img></div>`)
})