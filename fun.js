var oShell = new ActiveXObject("Shell.Application");
var commandtoRun = "C:\\Windows\\notepad.exe";
oShell.ShellExecute(commandtoRun, "", "", "open", "1");
