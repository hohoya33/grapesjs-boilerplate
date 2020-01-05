//import commands from "./commands";
import panels from "./panels";
import loadComponents from "./components";
import loadBlocks from "./blocks";

export default (editor, opts = {}) => {
	const options = {
		...{},
		...opts
	};

	// Add components
	loadComponents(editor, options);

	// Add blocks
	loadBlocks(editor, options);

	// Load commands
	//commands(editor, options);

	// Load panels
	panels(editor, options);
};

// var editor = grapesjs.init
// ({
// 	 height: '100%',
// 	 fromElement: 1,
// 	 clearOnRender: true,
// 	 container : '#gjs',
// 	 plugins: ['gjs-preset-newsletter'],
// 	 storageManager: {
// 	 autosave: false,
// 	 setStepsBeforeSave: 1,
// 	 type: 'remote',
// 	 urlStore: 'http://cimailer.dev/lets_dragdrop',
// 	 urlLoad: 'http://cimailer.dev/lets_dragdrop',
// 	 contentTypeJson: true,
// 	 },
// });

// var editor = grapesjs.init({
// 	container : '#gjs',
// 	components: '<div class="txt-red">Hello world!</div>',
// 	style: '.txt-red{color: red}',
// });

// <div id="gjs">
//   <div class="txt-red">Hello world!</div>
//   <style>.txt-red{color: red}</style>
// </div>

// <script type="text/javascript">
//   var editor = grapesjs.init({
//       container : '#gjs',
//       fromElement: true,
//   });
// </script>
