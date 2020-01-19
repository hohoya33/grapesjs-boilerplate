export default (domc, config = {}) => {
	const defaultType = domc.getType("default");
	const defaultModel = defaultType.model;
	const defaultView = defaultType.view;

	domc.addType("item-box", {
		model: defaultModel.extend(
			{
				defaults: {
					...defaultModel.prototype.defaults,
					name: "Tab",
					tagName: "li",
					copyable: true
					//draggable: `[data-gjs-type="tabs-navigation"]`
				},
				init() {}
			},
			{
				isComponent(el) {}
			}
		),

		view: defaultView.extend({
			init() {
				// const comps = this.model.components();
				// // Add a basic template if it's not yet initialized
				// if (!comps.length) {
				// 	comps.add(`
				// 		<div>
				// 			<a class="nav-link active" id="tab-1" data-toggle="tab" href="#tab-pane-1" role="tab" aria-controls="tab" aria-selected="true">Tab</a>
				// 			<span>test</span>
				// 		</div>
				//   `);
				// }
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
