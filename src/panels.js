export default (editor, config) => {
	const cm = editor.Commands;
	const pn = editor.Panels;
	const eConfig = editor.getConfig();

	const pfx = editor.getConfig().stylePrefix;
	const modal = editor.Modal;
	const codeViewer = editor.CodeManager.getViewer("CodeMirror").clone();
	const container = document.createElement("div");
	const btnEdit = document.createElement("button");

	codeViewer.set({
		codeName: "htmlmixed",
		readOnly: 0,
		theme: "hopscotch",
		autoBeautify: true,
		autoCloseTags: true,
		autoCloseBrackets: true,
		lineWrapping: true,
		styleActiveLine: true,
		smartIndent: true,
		indentWithTabs: true
	});

	btnEdit.innerHTML = "Import";
	btnEdit.className = pfx + "btn-prim " + pfx + "btn-import";
	btnEdit.onclick = function() {
		var code = codeViewer.editor.getValue();
		editor.DomComponents.getWrapper().set("content", "");
		editor.setComponents(code.trim());
		modal.close();
	};

	editor.Panels.addButton("options", [
		{
			id: "save",
			className: "fa fa-floppy-o icon-blank",
			command: "save-db",
			attributes: {
				title: "로컬에 저장하기"
			}
		},
		{
			id: "import",
			className: "fa fa-download",
			command: "html-import",
			attributes: {
				title: "로컬에서 불러오기"
			}
		},
		{
			id: "bookmark",
			className: "fa fa-external-link",
			command: "preview-save",
			attributes: {
				title: "미리보기 저장하기"
			}
		}
	]);

	cm.add("save-db", {
		run: function(editor, sender) {
			sender && sender.set("active", 0);
			editor.store();

			// var htmldata = editor.getHtml();
			// var cssdata = editor.getCss();
			// console.log(htmldata);
			// console.log(cssdata);
		}
	});

	cm.add("html-import", {
		run: function(editor, sender) {
			sender && sender.set("active", 0);
			// var viewer = codeViewer.editor;
			// modal.setTitle("Edit code");
			// if (!viewer) {
			// 	var txtarea = document.createElement("textarea");
			// 	container.appendChild(txtarea);
			// 	container.appendChild(btnEdit);
			// 	codeViewer.init(txtarea);
			// 	viewer = codeViewer.editor;
			// }
			// modal.setContent("");
			// modal.setContent(container);
			// codeViewer.setContent("");
			// modal.open();
			// viewer.refresh();
			editor.load();
		}
	});

	cm.add("preview-save", {
		run: function(editor, sender) {
			sender && sender.set("active", 0);
			console.log("북마크 실행됨");
			editor.runCommand("gjs-export-zip");
		}
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

	const openBl = pn.getButton("views", "open-blocks");
	editor.on("load", () => openBl && openBl.set("active", 1));
};
