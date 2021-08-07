const btn = document.querySelector('.idea');
//
const cool = [
    'Today we will discuss about. What is a moon? What does it do?, about moon\'s surface, and a little pinch of Fun facts. Let\'s get started. What is a moon? What does it do?. The Moon is a rounded astronomical body that orbits the Earth as its only natural satellite. It has a rocky silicate composition and is of planetary mass but has no significant atmosphere, hydrosphere or magnetic field. Its surface gravity is 0.1654 g, about one-sixth of Earth\'s. The Moon takes 27 days to revolve around the earth. The Moon\'s average orbital distance from Earth is 384,402 km or (238,856 mi) or 1.28 light-seconds. Its gravitational influence produces Earth\'s tides and slightly lengthens Earth\'s day. Before we go into the next topic I have some questions to ask you. The questions are What is the measure of moon\'s surface gravity and What is the ratio between moon\'s and earth\'s gravity? and the other one is What is the distance between earth and moon in light seconds. if anyone knows these answers please raise your hand.'
];
const afterAnswer = [
    'Yes, you are right. Let\'s continue. About moon\'s surface. The moon\'s surface is covered with dead volcanoes, impact craters, and lava flows, some visible to the unaided stargazer. Early scientists thought the dark stretches of the moon might be oceans. The moon\'s surface is mostly covered with dust called Lunar Soil, there is no air present at all. The first person to step on the moon was Neil Amstrong. Recently NASA has found water on moon with the help of Chandrayaan 1. The water on moon NASA found was approximately 2.81 water bottles of each 1 litre. All the space research organizations are expecting more water on moon which led to them build colonies on moon for humans to move onto the surface of moon. There was an interesting question that bothered scientists and amazed space lovers. The question is Why is one side of the moon thicker than the other? and here we are with the answer. Here goes the answer, The lunar crust possesses high concentrations of aluminum and calcium, elements that are very hard to vaporize. Eventually, these elements combined with silicates in the mantle of the moon to form minerals known as plagioclase feldspars, making the crust of the far side about twice as thick as that of the near side. Before we go into the next topic I have some questions to ask you. The questions are What is the dust on the moon called as? and the other one is How much water was found on moon? This time we will do it different. I will call a name and they should answer one question. and then I will call another name and the person should answer the other question. I will give the specified persons 5 seconds to respond. If both of them or one of them couldn\'t answer one question then you may raise your hand to answer. You may also raise your hand if the specified person did not respond or is absent. 1 seconds 2 seconds 3 seconds 4 seconds 5 seconds. You may now raise your hands.'
];
const nameCall = [
    'K Manasvini',
    'Vighnesh',
    'Lahari',
    'Kevin Joseph',
    'Shreyash Varma',
    'Aneshwara Nishanth',
    'Hemanya',
    'Srujana',
    'Jaswanth',
    'Thanmaya',
    'Meghana',
    'Pawan',
    'Vamsi Krishna',
    'Hardik',
    'Siddharth',
    'Dhiraj',
    'Asritha',
    'Kaavya',
    'Girivinayak',
    'Shriyan',
    'Yashwanth',
    'Punith',
    'sheeraj',
    'Sainadh',
    'Hasini',
    'Adwita',
    'Ashwita',
    'Hemanth',
    'Ria',
    'Shresta Priya',
    'Tejaswi',
    'Abhiram',
    'Keerthi',
    'Aksharan',
    'Sri Priya',
    'Tanuj',
    'Balagari',
    'Hamsritha',
    'Sharanya'
];
const funFacts = [
    'Fact number one. The moon is drifting away from the Earth?. It is true, the moon is drifting away from the earth. It is moving approximately 3.8 cm away from our planet every year. It is estimated that it will continue to do so for around 50 billion years. Fact number two. The moon is the fifth largest natural satellite?. The moon is a fifth-largest natural satellite in our solar system. At 3,475 km in diameter, the Moon is much smaller than the major moons of Jupiter and Saturn. A prevailing theory is that the Moon was once part of the Earth, and was formed from a chunk that broke away due to a huge object colliding with Earth when it was relatively young. Fact number three. During  the 1950s, the USA considered detonating a nuclear bom on the moon? It is true, in the era of 1950, the USA planned to detonate the moon with nuclear bomb. The secret project was during the height cold war was known as "A Study of Lunar Research Flights" or "Project A119" and meant as a show of strength at a time they were lagging behind in the space race. Fact number four. Only 12 people have ever walked on the moon. There are only 12 people in the history of mankind who have walked on the moon. It started with Neil Armstrong in 1969 as part of the Apollo 11 mission and ended with Gene Cernan in 1972 on the Apollo 17 mission. What is interesting to know is that all 12 people were from the USA. Those were such an amazing facts. Thank you for listening and co-operating with us.'
];
const onClick = [
    'Speak'
];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log(onClick);
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    readOutLoud(transcript);

};
btn.addEventListener('click', () => {
    recognition.start();
    typeWriter();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what you said';

    if(message.includes('start')){
        speech.text = cool;
    }
    if(message.includes('right')){
        speech.text = afterAnswer;
    }
    if(message.includes('name')){
        const finalText = nameCall[Math.floor(Math.random() * nameCall.length)];
        speech.text = finalText;
    }
    if(message.includes('fun facts')){
        speech.text = funFacts;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 2;

    window.speechSynthesis.speak(speech);
}

var i = 0;
var txt = 'Surface of Moon';
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}