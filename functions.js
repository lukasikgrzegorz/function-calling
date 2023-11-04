const sendEmail = (email, content) => {
  return `Send email with content: ${content}, to ${email}`;
};

const addTask = (content) => {
  return `Add task with content: ${content}`;
};

const noTask = () => {
  return `Try another task. I dont undernstand.`;
};

module.exports = {
  sendEmail,
  addTask,
  noTask,
};
