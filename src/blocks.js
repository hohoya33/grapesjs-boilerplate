// import nunjucks from "nunjucks";
// import buttonTemplate from "./html/partials/button.html";
// import macro_com_unit from "./html/partials/macro_com_unit.html";

// nunjucks.configure("src", {
// 	autoescape: false,
// 	tags: {
// 		blockStart: "[[%",
// 		blockEnd: "%]]",
// 		variableStart: "[[$",
// 		variableEnd: "$]]",
// 		commentStart: "[[#",
// 		commentEnd: "#]]"
// 	}
// });

export default (editor, config = {}) => {
	const bm = editor.BlockManager;

	bm.add("cmunit_ty_lst", {
		category: "상품유닛",
		label: "리스트형",
		attributes: { class: "fa fa-list" },
		content: {
			type: "cmunit_ty_lst"
		}
	});

	bm.add("cmunit_ty_thmb", {
		category: "상품유닛",
		label: "이미지형",
		attributes: { class: "fa fa-th" },
		content: {
			type: "cmunit_ty_thmb"
		}
	});

	bm.add("cmunit_ty_bthmb", {
		category: "상품유닛",
		label: "큰이미지형",
		attributes: { class: "fa fa-th-large" },
		content: {
			type: "cmunit_ty_bthmb"
		}
	});

	bm.add("item-box", {
		label: "Item Box",
		category: "Button",
		attributes: {
			class: "gjs-block fa fa-slideshare"
		},
		content: {
			type: "item-box"
		}
	});

	bm.add("item-box-red", {
		label: "Item Box Red",
		category: "Button",
		attributes: {
			class: "gjs-block fa fa-slideshare"
		},
		content: {
			type: "item-box-red",
			activeOnRender: 1
		}
	});

	//data-gjs-draggable="ul"
	//editable
	bm.add("button-anchor", {
		category: "Button",
		label: "Anchor",
		content: `
		<div>
		<p data-gjs-editable="true" data-gjs-selectable="false" data-gjs-droppable="false">test</p>
		<a data-gjs-hoverable="false" data-gjs-draggable="false" data-gjs-highlightable="false" href="#">Anchor!<a>
		</div>
		`
	});
};

// console.log(nunjucks);
// console.log(nunjucks.compile);

// bm.add("button-default", {
// 	category: "Button",
// 	label: "Default",
// 	content: nunjucks.renderString(`${buttonTemplate}`, { label: "Button！" })
// });

// bm.add("goods", {
// 	category: "상품유닛",
// 	label: "기본 3단",
// 	content: nunjucks.renderString(`
//   ${macro_com_unit}
//   <ul class="mndmoon_cunit_lst cunit_thmb_lst">
//     [[% for i in range(0, 3) -%]]
//     <li class="cunit_t290">[[$ macro_com_unit({ width: 290, height: 290 }) $]]</li>
//     [[%- endfor %]]
//   </ul>
//   `)
// });

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
