<template>

<div>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374">
        <v-img
      height="100"
      src="https://vaccineforthais.ais.th/Images/MicrosoftTeams-image.png"
    ></v-img>
  </v-card>
  <center>
<div>บริการลงทะเบียนรับวัคซีนโควิด-19 โดย เอไอเอส
<br>
จัดสรรโดย กรมการแพทย์ กระทรวงสาธารณสุข และกระทรวงคมนาคม
<br>
ระบุหมายเลขโทรศัพท์
เพื่อล็อกอินลงทะเบียนรับวัคซีน</div>
</center>
  <v-container
    class="d-flex flex-column align-center"
  >
        <v-text-field
              v-model="เบอร์"
              label="0XX-XXX-XXXX"
              filled/><v-btn
          href="/auth/signUp"
        rounded>รับรหัส OTP ทาง SMS
        </v-btn>
        <center>
        ข้อควรรู้ก่อนลงทะเบียนรับวัคซีน
        <br>
กลุ่มอายุ 12-17 ปี
<br>
• รับวัคซีนเข็ม 3: ฉีด 2 เข็ม ครบ 120 วัน
<br>
กลุ่มอายุ 18 ปี ขึ้นไป
<br>
• รับวัคซีนเข็ม 3: ฉีด 2 เข็ม ครบ 90 วัน
<br>
• รับวัคซีนเข็ม 4: ฉีด 3 เข็ม ครบ 120 วัน
<br>
สถานที่: สถานีกลางบางซื่อ
<br>
รอรับ SMS แจ้งผลลงทะเบียนภายใน 2 ชม.
1 หมายเลข (ค่ายใดก็ได้) / 5 บัตรประชาชน บัตรชมพู หรือพาสปอร์ต
ิ<br>
          <v-btn
          href="/family/qusetion"
        rounded>ดูคำถามพบบ่อย
        </v-btn>
        </center>
  </v-container>
  </div>
</template>
