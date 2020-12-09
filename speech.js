
const btn=document.querySelector('.talk');
const content=document.querySelector('.content')

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

const recon=new SpeechRecognition();

question=['how are you','how are you','are you fine'];

answer="I am good and you?";

recon.onstart=function(){
    console.log('Voice Activated!');
};

recon.onresult=function(event){
    //console.log(event);
    const current=event.resultIndex;
    const transcript=event.results[0][0].transcript;
    console.log(transcript);
    content.textContent=transcript;
    ReplyMe(transcript);
};

btn.addEventListener('click',()=>{
    recon.start();
})

function ReplyMe(msg){
    const reply=new SpeechSynthesisUtterance();
    question.forEach(element => {
        if(msg.includes(element))
    {
        reply.text=answer;
    }
    });
    
    reply.volume=1;
    reply.rate=1;
    reply.pitch=1;

    window.speechSynthesis.speak(reply);
}