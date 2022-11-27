// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  //takes in a message and logs it in the screen
  parse(message) {
    const lowercase = message.toLowerCase();
    if (lowercase.includes("thank")) {
      this.actionProvider.handleGreeting();
    } else if (lowercase.includes("menu")) {
      this.actionProvider.handleMenu();
    } else if (lowercase.includes("view")) {
      this.actionProvider.handleViewOrder();
    } else this.actionProvider.handleUnknown();
  }
}
export default MessageParser;
