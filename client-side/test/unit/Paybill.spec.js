import { mount } from "@vue/test-utils";
import payment from "@/pages/family/paybill";

describe("payment unit testing", () => {
  const wrapper = mount(payment);
  //testing with idle
  test("is a 'Pay' text appear", () => {
    expect(wrapper.html()).toContain("PAY");
  });

  test("is QRcode button appear", () => {
    expect(wrapper.find("v-btn.qrbutton").exists());
  });

  test("is Account button appear", () => {
    expect(wrapper.find("v-btn.accountbtn").exists());
  });

  test("is click Account button phone&account text will appear", () => {
    wrapper.find("v-btn.accountbtn").trigger("click");
    expect(wrapper.vm.$data.selectQr).toBe(false);
  });

  test("is click QRCODE button QR will appear", () => {
    wrapper.find("v-btn.qrbutton").trigger("click");
    expect(wrapper.vm.$data.selectQr).toBe(true);
  });

  // test("is qrcode function be call when click QRCODE button", () => {
  //   global.alert = jest.fn();
  //   wrapper.find("v-btn.qrbutton").trigger("click");
  //   expect(alert).toHaveBeenCalled();
  //   expect(alert).toHaveBeenCalledWith(" Alomost Finished Please Wait :) ");
  // });

  // test("is account function be call when click account button", () => {
  //   global.alert = jest.fn();
  //   wrapper.find("v-btn.accountbtn").trigger("click");
  //   expect(alert).toHaveBeenCalled();
  //   expect(alert).toHaveBeenCalledWith(" Alomost Finished Please Wait :) ");
  // });
});
