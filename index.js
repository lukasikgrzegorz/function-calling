const { ChatOpenAI } = require("langchain/chat_models/openai");
const { HumanMessage, SystemMessage } = require("langchain/schema");
require("dotenv").config();
const { sendEmail, addTask, noTask } = require("./schemas");
const { parseFunctionCall } = require("./helpers");
const functions = require("./functions");

const model = new ChatOpenAI({ modelName: "gpt-3.5-turbo" }).bind({
  functions: [sendEmail, addTask, noTask],
});

const action = async (query) => {
  try {
    const conversation = await model.invoke([
      new SystemMessage(
        `if you cannot match fuction, return the noTask function by default`
      ),
      new HumanMessage(query),
    ]);

    if (conversation) {
      console.log(conversation);
      return parseFunctionCall(conversation);
    } else {
      throw new Error("API response error");
    }
  } catch (error) {
    throw error;
  }
};

action("i need to send email to boss@boss.com, with thanks about my promotion")
  .then((result) => {
    console.log(result);
    console.log(functions[result.name](...Object.values(result.args)));
  })
  .catch((error) => {
    console.error(error);
  });
