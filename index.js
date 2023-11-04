const { ChatOpenAI } = require("langchain/chat_models/openai");
const { HumanMessage, SystemMessage } = require("langchain/schema");
require("dotenv").config();
const {sendEmail, addTask, noTask} = require("./schemas");


const model = new ChatOpenAI({ modelName: "gpt-3.5-turbo" }).bind({
  functions: [sendEmail, addTask, noTask],
});

const action = async (query) => {
  try {
    const conversation = await model.invoke([
      new SystemMessage(`if you cannot match fuction, return the noTask function by default`),
      new HumanMessage(query),
    ]);

    if (conversation) {
      return conversation;
    } else {
      throw new Error("API response error");
    }
  } catch (error) {
    throw error;
  }
};

action("i need to buy something for prestent")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
