import { mount } from "@vue/test-utils";
import upload from "@/pages/family/upload";

describe("upload unit testing", () => {
  const wrapper = mount(upload, {});
  test("is a 'Pay' text appear", () => {
    expect(wrapper.html()).toContain("PAY");
  });

  test("is a BACK button appear", () => {
    expect(wrapper.findAll("v-btn").at(1).exists());
    expect(wrapper.findAll("v-btn").at(1).text()).toBe("Back");
  });

  test("is a BACK button appear", () => {
    const upload = wrapper.find("input");
    expect(upload.exists());
    upload.trigger("click");
    expect(wrapper.vm.Upload);
  });
});
