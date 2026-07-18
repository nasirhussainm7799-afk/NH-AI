// NH AI Professional Assistant
// Frontend JavaScript


const messageInput = document.getElementById("messageInput");

const sendButton = document.getElementById("sendButton");

const chatArea = document.getElementById("chatArea");





// NH AI Information

const NH_AI_DATA = {

    name: "NH AI",

    founder: "Nasir Hussain",

    version: "1.0"

};






// Send Button Event


sendButton.addEventListener("click", sendMessage);





// Enter Key Support


messageInput.addEventListener("keydown", function(event){


    if(event.key === "Enter" && !event.shiftKey){

        event.preventDefault();

        sendMessage();

    }


});







// Main Message Function


function sendMessage(){


    const message = messageInput.value.trim();



    if(message === ""){

        return;

    }



    addMessage(
        message,
        "user"
    );



    messageInput.value = "";



    showTyping();



    setTimeout(function(){


        removeTyping();


        const response = generateResponse(message);



        addMessage(
            response,
            "ai"
        );



    },1000);



}








// Add Message To Chat


function addMessage(text,type){



    const messageDiv = document.createElement("div");


    messageDiv.className =
    "message " + type + "-message";





    const avatar = document.createElement("div");


    avatar.className =
    "avatar " +
    (type === "ai" ? "ai-avatar" : "user-avatar");





    avatar.innerText =
    type === "ai" ? "NH" : "U";







    const body = document.createElement("div");


    body.className="message-body";





    const name=document.createElement("div");


    name.className="message-name";


    name.innerText =
    type === "ai" ? "NH AI" : "You";







    const messageText=document.createElement("div");


    messageText.className="message-text";


    messageText.innerText=text;







    body.appendChild(name);


    body.appendChild(messageText);



    messageDiv.appendChild(avatar);


    messageDiv.appendChild(body);



    chatArea.appendChild(messageDiv);



    chatArea.scrollTop =
    chatArea.scrollHeight;



}









// AI Response System


function generateResponse(message){


    const text =
    message.toLowerCase();






    // Founder Rule


    if(

        text.includes("founder") ||

        text.includes("who created nh ai") ||

        text.includes("nh ai ka founder") ||

        text.includes("nh ai جو باني")

    ){


        return "NH AI was founded by Nasir Hussain. The project was created with the vision of building a modern AI assistant for learning, productivity and intelligent conversations.";


    }






    // Greetings


    if(

        text.includes("hello") ||

        text.includes("hi") ||

        text.includes("salam")

    ){


        return "Hello! I am NH AI. How can I help you today?";


    }
  // ===============================
// NH AI Advanced Functions
// ===============================




// Typing Animation


function showTyping(){


    const typing =
    document.createElement("div");


    typing.id="typingIndicator";


    typing.className="message ai-message";



    typing.innerHTML=`

        <div class="avatar ai-avatar">
            NH
        </div>

        <div class="message-body">

            <div class="message-name">
                NH AI
            </div>

            <div class="message-text">
                Thinking...
            </div>

        </div>

    `;



    chatArea.appendChild(typing);



    chatArea.scrollTop =
    chatArea.scrollHeight;


}







function removeTyping(){


    const typing =
    document.getElementById(
        "typingIndicator"
    );



    if(typing){

        typing.remove();

    }


}








// Language Detection


function detectLanguage(text){



    const urduWords=[

        "کیا",
        "ہے",
        "آپ",
        "مجھے",
        "بتائیں"

    ];





    const sindhiWords=[

        "ڇا",
        "آهي",
        "توهان",
        "مان",
        "ڪريو"

    ];





    let urdu=false;

    let sindhi=false;





    urduWords.forEach(word=>{


        if(text.includes(word)){

            urdu=true;

        }


    });





    sindhiWords.forEach(word=>{


        if(text.includes(word)){

            sindhi=true;

        }


    });






    if(sindhi){

        return "Sindhi";

    }



    if(urdu){

        return "Urdu";

    }



    return "English";


}









// Better AI Responses



function advancedResponse(message){



    const language =
    detectLanguage(message);






    if(language==="Urdu"){


        return "میں NH AI ہوں۔ میں آپ کی معلومات، تعلیم، کوڈنگ اور تخلیقی کاموں میں مدد کر سکتا ہوں۔";


    }






    if(language==="Sindhi"){


        return "مان NH AI آهيان. مان توهان جي سوالن، سکيا ۽ تخليقي ڪم ۾ مدد ڪري سگهان ٿو.";


    }





    return "I am NH AI. I can assist you with knowledge, coding, creativity and problem solving.";



}









// API Configuration


const API_CONFIG = {


    enabled:false,


    endpoint:"YOUR_API_ENDPOINT_HERE"


};









// Future API Function


async function askAIAPI(message){



    if(!API_CONFIG.enabled){


        return advancedResponse(message);


    }






    try{


        const response =
        await fetch(
            API_CONFIG.endpoint,
            {

                method:"POST",

                headers:{

                    "Content-Type":
                    "application/json"

                },


                body:JSON.stringify({

                    message:message

                })


            }

        );





        const data =
        await response.json();




        return data.reply;





    }catch(error){



        return "Sorry, NH AI is currently unavailable.";



    }



}






    return "I am NH AI. I can help you with questions, learning, coding, writing and many other tasks.";



}
// =====================================
// NH AI Chat Management System
// =====================================





// Save Chat History


function saveChat(){


    const chats =
    chatArea.innerHTML;


    localStorage.setItem(
        "NH_AI_HISTORY",
        chats
    );


}








// Load Previous Chat


function loadChat(){


    const oldChat =
    localStorage.getItem(
        "NH_AI_HISTORY"
    );



    if(oldChat){


        chatArea.innerHTML =
        oldChat;


    }


}








// Clear Chat Function


function clearChat(){


    chatArea.innerHTML = "";



    localStorage.removeItem(
        "NH_AI_HISTORY"
    );



    showWelcome();


}









// Welcome Screen


function showWelcome(){



    const welcome =
    document.createElement("div");



    welcome.className =
    "welcome-section";



    welcome.innerHTML=`

        <div class="welcome-logo">
            NH
        </div>

        <h2>
            Welcome to NH AI
        </h2>

        <p>
            Ask anything and start conversation.
        </p>

    `;



    chatArea.appendChild(welcome);


}









// Copy Message Function


function copyText(text){



    navigator.clipboard.writeText(text);



}









// Add Copy Button To Messages


function addCopyButtons(){



    const messages =
    document.querySelectorAll(
        ".message-text"
    );




    messages.forEach(message=>{


        message.onclick=function(){


            copyText(
                message.innerText
            );



        };


    });



}









// Regenerate Response


async function regenerate(lastMessage){



    showTyping();




    setTimeout(()=>{


        removeTyping();



        const response =
        generateResponse(
            lastMessage
        );



        addMessage(
            response,
            "ai"
        );



        saveChat();



    },1000);



}









// Auto Save After Message


const oldAddMessage =
addMessage;



addMessage=function(text,type){



    oldAddMessage(
        text,
        type
    );



    saveChat();



};









// Start Application


window.addEventListener(
"load",
function(){


    loadChat();



});
// =====================================
// NH AI Interface Controls
// =====================================





// Mobile Menu


const mobileButton =
document.querySelector(
".mobile-menu-btn"
);



const sidebar =
document.querySelector(
".sidebar"
);



if(mobileButton){


    mobileButton.addEventListener(
    "click",
    function(){


        sidebar.classList.toggle(
            "active"
        );


    });


}








// Theme Button


const themeButton =
document.querySelector(
".theme-button"
);



let darkMode=false;



if(themeButton){


themeButton.addEventListener(
"click",
function(){



    darkMode =
    !darkMode;



    if(darkMode){



        document.body.style.background =
        "#111827";



        document.body.style.color =
        "#ffffff";



    }

    else{


        document.body.style.background =
        "#ffffff";



        document.body.style.color =
        "#111827";


    }



});


}









// Settings Open Close


const settingsButton =
document.querySelector(
".menu-item:last-child"
);



const settingsWindow =
document.getElementById(
"settingsWindow"
);



const closeSettings =
document.querySelector(
".close-settings"
);





if(settingsButton){


settingsButton.onclick=function(){



    if(settingsWindow){

        settingsWindow.style.display =
        "block";

    }


};


}







if(closeSettings){


closeSettings.onclick=function(){



    settingsWindow.style.display =
    "none";



};


}









// Smooth Scroll


function scrollBottom(){



    chatArea.scrollTo({

        top:
        chatArea.scrollHeight,

        behavior:
        "smooth"

    });


}









// Enter Animation


function animateAI(){



    const aiMessages =
    document.querySelectorAll(
        ".ai-message"
    );



    aiMessages.forEach(item=>{


        item.style.animation =
        "messageAppear .4s ease";


    });



}









// Security Filter


function cleanInput(text){



    return text
    .replace(
        /<script>/gi,
        ""
    )
    .replace(
        /<\/script>/gi,
        ""
    );


}








// Override Message Sending Security


const originalSend =
sendMessage;



sendMessage=function(){



    messageInput.value =
    cleanInput(
        messageInput.value
    );



    originalSend();



};









console.log(
"NH AI Frontend Loaded Successfully"
);
