let myInput=document.querySelector("input")
let myBtn=document.querySelector("button")
let mySelect=document.querySelector("select")
let allVoices=null

speechSynthesis.addEventListener("voiceschanged",()=>{
  allVoices=speechSynthesis.getVoices()
  console.log(allVoices);
  allVoices.forEach((e)=>{
    let myOption=document.createElement("option")

    myOption.innerHTML=e.name //ui
    myOption.value=e.name  //we need to get value

    mySelect.append(myOption)

  })
})

myBtn.addEventListener("click",()=>{
  let myAudio=new SpeechSynthesisUtterance(myInput.value)
  // console.log(myAudio);
  let particularVoice=allVoices.find((e)=>{
    if(e.name==mySelect.value){
      return e
    }

  })
  myAudio.voice=particularVoice

  myAudio.voice=allVoices[4]
  // console.log(allVoices);

  speechSynthesis.speak(myAudio)
})