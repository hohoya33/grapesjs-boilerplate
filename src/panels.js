export default (editor, config) => {
	const cm = editor.Commands;
	const pn = editor.Panels;
	const eConfig = editor.getConfig();

	editor.Panels.addButton("options", [
		{
			id: "save",
			className: "fa fa-floppy-o icon-blank",
			// command: function(editor, sender) {
			// 	if (sender) sender.set("active", false);
			// 	editor.store();
			// 	alert("Template Saved Successfully !");
			// },
			command: "save-db",
			attributes: {
				title: "Save To Database"
			}
		}
	]);

	cm.add("save-db", {
		run: function(editor, sender) {
			sender && sender.set("active", 0); // turn off the button
			editor.store();

			var htmldata = editor.getHtml();
			var cssdata = editor.getCss();
			console.log(htmldata);
			console.log(cssdata);
			// $.post("templates/template", {
			// 	html: htmldata,
			// 	css: cssdata
			// });
		}
	});

	editor.on("storage:load", function(e) {
		console.log("Loaded ", e);
	});
	editor.on("storage:store", function(e) {
		console.log("Stored ", e);
	});

	eConfig.showDevices = 0;

	// Add devices buttons
	const panelDevices = pn.addPanel({ id: "devices-c" });
	panelDevices.get("buttons").add([
		{
			id: "set-device-desktop",
			command: "set-device-desktop",
			className: "fa fa-desktop",
			active: 1
		},
		{
			id: "set-device-tablet",
			command: "set-device-tablet",
			className: "fa fa-tablet"
		},
		{
			id: "set-device-mobile",
			command: "set-device-mobile",
			className: "fa fa-mobile"
		}
	]);

	cm.add("set-device-desktop", e => e.setDevice("Desktop"));
	cm.add("set-device-tablet", e => e.setDevice("Tablet"));
	cm.add("set-device-mobile", e => e.setDevice("Mobile portrait"));

	// editor.Panels.addPanel({ id: "devices-a" })
	// 	.get("buttons")
	// 	.add([
	// 	{
	// 		id: "save",
	// 		className: "fa fa-floppy-o icon-blank",
	// 		command: function(editor1, sender) {
	// 			alert("Hello World");
	// 		},
	// 		attributes: { title: "Save Template" }
	// 	}
	// 		{
	// 			id: "alert-button",
	// 			className: "btn-alert-button",
	// 			label: "Click Button",
	// 			command(editor) {
	// 				alert("Hello World");
	// 			}
	// 			//active: true
	// 		},

	// 	]);

	const openBl = pn.getButton("views", "open-blocks");
	editor.on("load", () => openBl && openBl.set("active", 1));
};
