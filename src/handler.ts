import { QuickReply, QuickReplyItem, TextMessage } from "@line/bot-sdk";
import { FixedMessages } from "./constants";

export const mapResponse = (input: string): TextMessage | undefined => {
  switch (input) {
    case "ping":
      return createTextMessage("pong");
    case "emoji fire":
      return createTextMessage("️‍🔥");
    case "new lines":
      return createTextMessage("1\n2\n3");
    case FixedMessages.inquireRefund:
      return createQuestionSameDay();
    case FixedMessages.choiceSameDayYes:
      return createQuestion2000();
    case FixedMessages.choiceSameDayNo:
      return createTextMessage(FixedMessages.textRefund);
    case FixedMessages.choice2000Before:
      return createTextMessage(FixedMessages.textVoid);
    case FixedMessages.choice2000After:
      return createTextMessage(FixedMessages.textRefund);
    default:
      break;
  }
};

const createQuestionSameDay = (): TextMessage => {
  return createTextMessageWithQuickReply(
    FixedMessages.questionSameDay,
    FixedMessages.choiceSameDayYes,
    FixedMessages.choiceSameDayNo
  );
};

const createQuestion2000 = (): TextMessage => {
  return createTextMessageWithQuickReply(
    FixedMessages.question2000,
    FixedMessages.choice2000Before,
    FixedMessages.choice2000After
  );
};

//
const createTextMessage = (text: string): TextMessage => {
  return {
    type: "text",
    text: text,
  };
};

const createTextMessageWithQuickReply = (
  question: string,
  choice1: string,
  choice2: string
): TextMessage => {
  return {
    type: "text",
    text: question,
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: choice1,
            text: choice1,
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: choice2,
            text: choice2,
          },
        },
      ],
    },
  };
};
