import nunjucks from "nunjucks";
import macro_cmunit_item from "./html/partials/macro_cmunit_item.html";

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

import ItemBox from "./components/ItemBox";
import ItemBoxRed from "./components/ItemBoxRed";

export default (editor, config = {}) => {
	const domc = editor.DomComponents;
	const defaultType = domc.getType("default");
	const defaultModel = defaultType.model;
	const defaultView = defaultType.view;

	ItemBox(domc, config);
	ItemBoxRed(domc, config);

	// 컴포넌트 타입 정의: 상품유닛 리스트형
	domc.addType("cmunit_ty_lst", {
		model: defaultModel.extend({
			defaults: {
				...defaultModel.prototype.defaults
			}
		}),
		view: defaultView.extend({
			init() {
				const comps = this.model.components();

				// Add a basic template if it's not yet initialized
				if (!comps.length) {
					comps.add(
						nunjucks.renderString(`
	        ${macro_cmunit_item}
	        <!-- 공통상품유닛 -->
	        <div class="cmunit_grid cmunit_grid_ssg">
	          <ul class="cmunit_grid_lst cmunit_ty_lst">
	            <li class="cmunit_grid_item">
	              <!-- 옵션 풀케이스 -->
	              [[$ macro_cmunit_item({
	                key: '_lst',
	                index : 1,
	                cmunit_best : true,
	                cmunit_rank : true,
	                cmunit_bdg_buydone : true,
	                cmunit_bdg_always : true,
	                cmunit_bdg_taste : true,
	                cmunit_chk : true,
	                cmunit_bdg_countdown : true,
	                cmunit_bdg_deadline : true,
	                cmunit_btn_gift : true,
	                cmunit_soldout : true,
	                cmunit_sideinfo: true,
	                jquery_tmpl : false
	              }) $]]
	              <!-- //옵션 풀케이스 -->
	            </li>
	            <li class="cmunit_grid_item">
	              <!-- 옵션 풀케이스 -->
	              [[$ macro_cmunit_item({
	                key: '_lst',
	                index : 2,
	                cmunit_best : true,
	                cmunit_rank : true,
	                cmunit_bdg_buydone : true,
	                cmunit_bdg_always : true,
	                cmunit_bdg_taste : true,
	                cmunit_chk : true,
	                cmunit_bdg_countdown : true,
	                cmunit_bdg_deadline : true,
	                cmunit_btn_gift : true,
	                cmunit_soldout : true,
	                cmunit_sideinfo: true,
	                jquery_tmpl : false
	              }) $]]
	              <!-- //옵션 풀케이스 -->
	            </li>
	          </ul>
	        </div>
	        <!-- //공통상품유닛 -->
	        `)
					);
				}
			}
		})
	});

	// 컴포넌트 타입 정의: 상품유닛 이미지형
	domc.addType("cmunit_ty_thmb", {
		model: defaultModel.extend({
			defaults: {
				...defaultModel.prototype.defaults
			}
		}),
		view: defaultView.extend({
			init() {
				const comps = this.model.components();

				// Add a basic template if it's not yet initialized
				if (!comps.length) {
					comps.add(
						nunjucks.renderString(`
	        ${macro_cmunit_item}
	        <!-- 공통상품유닛 -->
          <div class="cmunit_grid cmunit_grid_ssg">
            <ul class="cmunit_grid_lst cmunit_ty_thmb">
              <li class="cmunit_grid_item">
                <!-- 옵션 풀케이스 -->
                [[$ macro_cmunit_item({
                  key: '_thmb',
                  index : 1,
                  cmunit_best : true,
                  cmunit_rank : true,
                  cmunit_bdg_buydone : true,
                  cmunit_bdg_always : true,
                  cmunit_bdg_taste : true,
                  cmunit_chk : true,
                  cmunit_bdg_countdown : true,
                  cmunit_bdg_deadline : true,
                  cmunit_btn_gift : true,
                  cmunit_soldout : true,
                  cmunit_sideinfo: true,
                  jquery_tmpl : false
                }) $]]
                <!-- //옵션 풀케이스 -->
              </li>
              <li class="cmunit_grid_item">
                <!-- 옵션 풀케이스 -->
                [[$ macro_cmunit_item({
                  key: '_thmb',
                  index : 2,
                  cmunit_best : true,
                  cmunit_rank : true,
                  cmunit_bdg_buydone : true,
                  cmunit_bdg_always : true,
                  cmunit_bdg_taste : true,
                  cmunit_chk : true,
                  cmunit_bdg_countdown : true,
                  cmunit_bdg_deadline : true,
                  cmunit_btn_gift : true,
                  cmunit_soldout : true,
                  cmunit_sideinfo: true,
                  jquery_tmpl : false
                }) $]]
                <!-- //옵션 풀케이스 -->
              </li>
          </div>
          <!-- //공통상품유닛 -->
	        `)
					);
				}
			}
		})
	});

	// 컴포넌트 타입 정의: 상품유닛 큰이미지형
	domc.addType("cmunit_ty_bthmb", {
		model: defaultModel.extend({
			defaults: {
				...defaultModel.prototype.defaults
			}
		}),
		view: defaultView.extend({
			init() {
				const comps = this.model.components();

				// Add a basic template if it's not yet initialized
				if (!comps.length) {
					comps.add(
						nunjucks.renderString(`
	        ${macro_cmunit_item}
	        <!-- 공통상품유닛 -->
          <div class="cmunit_grid cmunit_grid_ssg">
            <ul class="cmunit_grid_lst cmunit_ty_bthmb">
              <li class="cmunit_grid_item">
                <!-- 옵션 풀케이스 -->
                [[$ macro_cmunit_item({
                  key: '_bthmb',
                  index : 1,
                  cmunit_best : true,
                  cmunit_rank : true,
                  cmunit_bdg_buydone : true,
                  cmunit_bdg_always : true,
                  cmunit_bdg_taste : true,
                  cmunit_chk : true,
                  cmunit_bdg_countdown : true,
                  cmunit_bdg_deadline : true,
                  cmunit_btn_gift : true,
                  cmunit_soldout : true,
                  cmunit_sideinfo: true,
                  jquery_tmpl : false
                }) $]]
                <!-- //옵션 풀케이스 -->
              </li>
              <li class="cmunit_grid_item">
                <!-- 옵션 풀케이스 -->
                [[$ macro_cmunit_item({
                  key: '_bthmb',
                  index : 2,
                  cmunit_best : true,
                  cmunit_rank : true,
                  cmunit_bdg_buydone : true,
                  cmunit_bdg_always : true,
                  cmunit_bdg_taste : true,
                  cmunit_chk : true,
                  cmunit_bdg_countdown : true,
                  cmunit_bdg_deadline : true,
                  cmunit_btn_gift : true,
                  cmunit_soldout : true,
                  cmunit_sideinfo: true,
                  jquery_tmpl : false
                }) $]]
                <!-- //옵션 풀케이스 -->
              </li>
          </div>
          <!-- //공통상품유닛 -->
	        `)
					);
				}
			}
		})
	});
};
