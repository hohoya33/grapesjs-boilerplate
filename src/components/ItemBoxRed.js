export default (domc, config = {}) => {
	const defaultType = domc.getType("default");
	const defaultModel = defaultType.model;
	const defaultView = defaultType.view;

	domc.addType("item-box-red", {
		// Define the Model
		model: defaultModel.extend(
			{
				// Extend default properties
				defaults: {
					...defaultModel.prototype.defaults,
					droppable: false,
					draggable: true,
					highlightable: false,
					badgable: false,
					hoverable: false,
					layerable: false,
					selectable: false,
					copyable: false,
					type: "redBox",
					tagName: "div",
					void: 0,
					title: "",
					attributes: {
						frameborder: 0
					},
					traits: [
						{
							type: "text",
							label: "Title",
							name: "title",
							placeholder: "eg. Lorem Ipsum",
							changeProp: 1
						}
					]
				},
				init: function init() {},
				initialize: function initialize(o) {
					defaultModel.prototype.initialize.apply(this, arguments);
				}
			},
			{
				isComponent: function isComponent(el) {
					if (el.getAttribute && el.getAttribute("data-gjs-type") == "redBox") {
						return {
							type: "redBox"
						};
					}
				}
			}
		),
		// Define the View
		view: defaultView.extend({
			tagName: "div",
			initialize: function initialize(o) {
				console.log(o);
				defaultView.prototype.initialize.apply(this, arguments);
			},
			render: function render() {
				this.el.innerHTML = `
        <div style="height:100px;background-color:red">
          <h4>TEST CONTENT</h4>
          <span>test</span>
          <a href="#">링크</a>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <p>testest</p>
          </div>
        </div>
        `;
				return this;
			}
		})
	});
};
