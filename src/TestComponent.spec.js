import { mount } from "@vue/test-utils";
import TestComponent from "./TestComponent.vue";

const FIELDS = [
	{
		name: "Animals",
		subFields: ["Cat", "Elephant", "Sheep", "Monkey"]
	},
	{
		name: "Cities",
		subFields: ["New York", "Paris"]
	},
	{
		name: "Fruits",
		subFields: ["Apple", "Banana", "Pear"]
	},
	{
		name: "Veggies",
		subFields: ["Carrot"]
	}
];
	
describe("The TestComponent", () => {
	test("only shows subfields related to the currently selected field", async () => {
		const wrapper = mount(TestComponent, {
			props: { availableFields: FIELDS }
		});
		
		expect(wrapper.findAll(".subField")).toHaveLength(0);
		
		// Select "Fruits"
		await wrapper.findAll(".field")[2].trigger("click");
		
		expect(wrapper.findAll(".subField")).toHaveLength(3);// Fails here, can't find any subFields
		expect(wrapper.findAll(".subField")[0].text()).toContain("Apple");
		expect(wrapper.findAll(".subField")[1].text()).toContain("Banana");
		expect(wrapper.findAll(".subField")[2].text()).toContain("Pear");
		
		// Select "Veggies", unselecting "Fruits"
		await wrapper.findAll(".field")[3].trigger("click");
		
		expect(wrapper.findAll(".subField")).toHaveLength(1);
		expect(wrapper.findAll(".subField")[0].text()).toContain("Carrot");
	});
});
