const bulb= Document.getElementbyid('bulb')
const off= Document.getElementbyid('off')
const on= Document.getElementbyid('on')

on.addEventlistner('click',()=>{
bulb.style.backgroundcolor ='yellow'
})
off.addEventlistner('click',()=>{
bulb.style.backgroundcolor ='white'
})