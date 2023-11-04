const sendEmail = {
  name: "sendEmail",
  description: "Sends an e-mail to a specified person with specific content",
  parameters: {
    type: "object",
    properties: {
      email: {
        type: "string",
        description: "provide recipient's email",
      },
      content: {
        type: "string",
        description: "provide email's content",
      },
    },
  },
};

const addTask = {
  name: "addTask",
  description: "Add new task to do",
  parameters: {
    type: "object",
    properties: {
      content: {
        type: "string",
        description: "content of task to do",
      },
    },
  },
};

const noTask = {
  name: "noTask",
  description: "Return info about no matching task if model cant fit action to user message",
  function_call: "auto",
  parameters: {
    type: "object",
    properties: {},
  },
};

module.exports = {
  sendEmail,
  addTask,
  noTask,
};
