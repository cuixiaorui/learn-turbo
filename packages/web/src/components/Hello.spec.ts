import Hello from "./Hello.vue";
import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";

test("hello", () => {
  const wrapper = mount(Hello);
  expect(wrapper.text()).toContain("Hello");
});
