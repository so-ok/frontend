// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    createCustomMessage,
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.createCustomMessage = createCustomMessage;
  }

  /*Attentions */
  handleAttention = () => {
    const message = this.createChatBotMessage('관심 항목을 선택해주세요.', {
      delay: 500,
      widget: 'attentions',
      withAvatar: true,
    });
    this.setChatbotMessage(message);
  };

  handleBye = () => {
    const message = this.createChatBotMessage(
      '도움이 필요하면 저를 찾아주세요!',
    );
    this.setChatbotMessage(message);
  };

  handleMenu = () => {
    const message = this.createChatBotMessage(
      '도움을 줄 수 있는 영양제 리스트입니다.',
      {
        delay: 500,
        widget: 'menu',
        withAvatar: true,
      },
    );
    this.setChatbotMessage(message);
  };

  /*User Details */
  handleUserDetails = () => {
    const message1 = this.createChatBotMessage(
      'Lastly please provide me your personal details',
    );
    const message2 = this.createChatBotMessage(
      'Please help me with your name',
      {
        delay: 500,
        widget: 'name',
        withAvatar: true,
      },
    );
    this.setChatbotMessage(message1);
    this.setChatbotMessage(message2);
  };

  /**Name Error */
  handleNameError = () => {
    const message = this.createChatBotMessage(
      'Please enter a name of minimum length 4',
      {
        delay: 500,
        widget: 'name',
        withAvatar: true,
      },
    );
    this.setChatbotMessage(message);
  };

  /*ORDER DETAILS */
  handleViewOrder = () => {
    const message = this.createChatBotMessage('Your Order Details are', {
      widget: 'view',
      withAvatar: true,
    });
    this.setChatbotMessage(message);
  };

  handleGreeting = () => {
    const message = this.createChatBotMessage(
      '장바구니를 통해 제품의 영양소 함량 총계를 확인하세요!',
    );
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;
