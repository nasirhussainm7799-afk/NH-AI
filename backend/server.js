// =======================================
// NH AI Professional Backend
// server.js
// =======================================
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Import Libraries

const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");




// Load Environment Variables

dotenv.config();




// Create Application

const app = express();





// Port

const PORT = process.env.PORT || 5000;






// Middleware


app.use(
    cors()
);


app.use(
    express.json()
);







// NH AI Information


const NH_AI = {


    name: "NH AI",


    founder: "Nasir Hussain",


    version: "1.0"



};








// Home Route


app.post("/chat", async (req, res) => {

    try {

        const userMessage = req.body.message;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });

        const result = await model.generateContent(userMessage);

        const reply = result.response.text();

        res.json({
            reply: reply
        });


    } catch (error) {

        res.json({
            reply: "NH AI error: " + error.message
        });

    }

});


    res.json({


        message:
        "Welcome to NH AI Backend",


        assistant:
        NH_AI.name,


        version:
        NH_AI.version


    });



});









// Chat API Route


app.post("/chat",(req,res)=>{


    const userMessage =
    req.body.message;



    if(!userMessage){


        return res.status(400).json({


            error:
            "Message is required"


        });


    }







    const reply =
    generateResponse(
        userMessage
    );





    res.json({


        reply:reply


    });



});









// AI Response Function


function generateResponse(message){



    const text =
    message.toLowerCase();






    // Founder Question


    if(

        text.includes("founder") ||

        text.includes("who created nh ai") ||

        text.includes("nh ai founder") ||

        text.includes("nh ai ka founder")

    ){



        return (

        "NH AI was founded by Nasir Hussain. " +

        "The project was created to build a modern AI assistant " +

        "for learning, productivity and intelligent conversations."

        );


    }








    // Greeting


    if(

        text.includes("hello") ||

        text.includes("hi") ||

        text.includes("salam")

    ){



        return (

        "Hello! I am NH AI. " +

        "How can I help you today?"

        );


    }








    // Default Response


    return (

    "I am NH AI, your intelligent assistant. " +

    "I can help you with knowledge, coding, creativity and learning."

    );





}









// Start Server


app.listen(
PORT,
()=>{


console.log(

`NH AI Backend running on port ${PORT}`

);
app.listen(5000, () => {
  console.log("NH AI Server running on port 5000");
});

});
