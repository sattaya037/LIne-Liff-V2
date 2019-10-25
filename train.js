var intent = [
  {
      "id": "1",
      "message": "trainbot>",
      "reply": "trainbot"
  },
  {
      "id": "2",
      "message": "test2",
      "reply": "Sir Crocodile"
  }
  ];
   
  /* ฟังก์ชันสำหรับหา user ทั้งหมดในระบบ ในส่วนนี้ผมจะให้ส่งค่า users ทั้งหมดกลับไปเลย */
  exports.intent = function() {
      return intent;
  };
   
  /* ฟังก์ชันสำหรับหา user จาก id ในส่วนนี้เราจะวน loop หา users ที่มี id ตามที่ระบุแล้วส่งกลับไป */
  // exports.findById = function (id) {
  //     for (var i = 0; i < users.length; i++) {
  //         if (users[i].id == id) return users[i];
  //     }
  // };