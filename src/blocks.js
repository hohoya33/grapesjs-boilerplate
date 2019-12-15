import nunjucks from "nunjucks";
import buttonTemplate from "./html/partials/button.html";
import macro_com_unit from "./html/partials/macro_com_unit.html";

nunjucks.configure("src", {
	autoescape: false,
	tags: {
		blockStart: "[[%",
		blockEnd: "%]]",
		variableStart: "[[$",
		variableEnd: "$]]",
		commentStart: "[[#",
		commentEnd: "#]]"
	}
});

export default (editor, config = {}) => {
	const bm = editor.BlockManager;

	console.log(nunjucks);
	// console.log(nunjucks.compile);

	bm.add("button-default", {
		category: "Button",
		label: "Default",
		content: nunjucks.renderString(`${buttonTemplate}`, { label: "Button！" })
	});

	bm.add("button-anchor", {
		category: "Button",
		label: "Anchor",
		content: `<a href="#">Anchor!<a>`
	});

	bm.add("goods", {
		category: "상품유닛",
		label: "기본 3단",
		content: nunjucks.renderString(`
	  ${macro_com_unit}
	  <ul class="mndmoon_cunit_lst cunit_thmb_lst">
	    [[% for i in range(0, 3) -%]]
	    <li class="cunit_t290">[[$ macro_com_unit({ width: 290, height: 290 }) $]]</li>
	    [[%- endfor %]]
	  </ul>
	  `)
	});
};

// import macro_com_unit from './01.ssg/pcweb/trunk/src/html/partials/macro_com_unit.html';
// import styles from "./01.ssg/pcweb/trunk/src/scss/mndmoon.scss";
// //styles.use();
// //${JSON.stringify(styles)}

//   storiesOf("SSG PC|Components/Product", module)
//     .add('상품유닛', () => env.renderString(`
//       <style type="text/css">
//       ${styles.toString()}
//       </style>

//       ${macro_com_unit}
//       <ul class="mndmoon_cunit_lst cunit_thmb_lst">
//           [[% for i in range(0, 2) -%]]
//           <li class="cunit_t290">[[$ macro_com_unit({ width: 290, height: 290 }) $]]</li>
//           [[%- endfor %]]
//       </ul>
//     `))
