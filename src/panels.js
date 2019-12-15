export default (editor, config) => {
	const cm = editor.Commands;
	const pn = editor.Panels;
	const eConfig = editor.getConfig();

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

	const openBl = pn.getButton("views", "open-blocks");
	editor.on("load", () => openBl && openBl.set("active", 1));
};
