export namespace FixedMessages {
  // Asking for refund
  export const inquireRefund = "ดูขั้นตอนการขอคืนเงิน";

  // Ask if refund in same day
  export const questionSameDay =
    "คุณต้องการขอคืนเงินภายในวันเดียวกับวันที่มีการทำธุรกรรมหรือไม่?";
  export const choiceSameDayYes = "ใช่ ภายในวันเดียวกัน";
  export const choiceSameDayNo = "ไม่ใช่ วันอื่น";

  // Ask if refund before 20:00
  export const question2000 =
    "คุณขอคืนเงินก่อนเวลา 20:00 น. ของวันที่ลูกค้าชำระเงินหรือไม่?";
  export const choice2000Before = "ก่อน 20:00 น.";
  export const choice2000After = "หลัง 20:00 น.";

  // Text Response
  export const textRefund = "ขั้นตอนการ Refund...";
  export const textVoid = "ขั้นตอนการ Void...";
}
