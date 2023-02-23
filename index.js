// 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

const { Configuration, OpenAIApi }=require("openai");
const express = require('express')
const configuration = new Configuration({
    organization: "org-mHyKQG4uuqdJQMuLjfyyBETH",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


//create a simple express api that calls the gpt callAPi function we created now

const bodyParser =require('body-parser');
const cors=require('cors');

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port=4000

app.post('/',async (req,res)=>{
    const {message}=req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      console.log(response.data.choices[0].text);
      res.json({
        // initial:message,
        message: response.data.choices[0].text
      })
    // console.log(message);
    // res.json({
    //     data:message
    // })

})

app.listen(port, () => console.log('server is running on port http://localhost:4000')); 