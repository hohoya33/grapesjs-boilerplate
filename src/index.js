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
