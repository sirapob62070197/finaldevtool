import { mount } from "@vue/test-utils";
import family from "@/pages/family/index";

describe("family unit testing", () => {
  const wrapper = mount(family);
  test("is a 'Host' text appear", () => {
    expect(wrapper.html()).toContain("Host");
  });

  test("Clicked CREATE button", () => {
    wrapper.findAll("v-btn.create-button").trigger("click");
    expect(wrapper.vm.$data.createDialog).toBe(true);
  });

  test("is a Member text appear", () => {
    expect(wrapper.html()).toContain("Member");
  });

  test("Clicked JOIN button", () => {
    wrapper.findAll("v-btn.join-button").trigger("click");
    expect(wrapper.vm.$data.joinDialog).toBe(true);
  });

  test("first families data should be null", () => {
    expect(wrapper.vm.$data.families).toBeFalsy();
  });

  test("host data should not exist", () => {
    expect(wrapper.find("v-row.host-data").exists()).toBeFalsy();
  });

  test("member data should not exist", () => {
    expect(wrapper.find("v-row.member-data").exists()).toBeFalsy();
  });

  test("Clicked save button to create new family", () => {
    const familyName = "สมศรี";
    wrapper.vm.$data.familyData.familyName = familyName;
    wrapper.findAll("v-btn.save-button-family").trigger("click");
    expect(wrapper.vm.$data.familyData.familyName.length).toBeGreaterThan(0);
    expect(wrapper.vm.$data.familyData.familyName.length).toBeLessThanOrEqual(
      25
    );
  });

  test("Click CLOSE button to close create dialog", () => {
    wrapper.findAll("v-btn.close-create-btn").trigger("click");
    expect(wrapper.vm.$data.createDialog).toBe(false);
  });

  test("Click save button to join family", () => {
    const familyCode = "7H60TG";
    wrapper.vm.$data.joinCode = familyCode;
    wrapper.findAll("v-btn.save-button-code").trigger("click");
    expect(wrapper.vm.$data.joinCode.length).toBe(6);
  });

  test("Click CLOSE button to close join dialog", () => {
    wrapper.findAll("v-btn.close-join-btn").trigger("click");
    expect(wrapper.vm.$data.joinDialog).toBe(false);
  });
});
