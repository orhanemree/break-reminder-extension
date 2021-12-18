const vscode = require("vscode");

module.exports = {
  activate,
  deactivate,
};

const link = "https://orhanemre.me"

function activate(context) {
    // set default breakTime to 30 minutes
    if (context.globalState.get("breakTime") === undefined){
        context.globalState.update("breakTime", 30);
    }
    let counter = 0;
    setInterval( () => {
        if (vscode.window.state.focused){
            const breakTime = context.globalState.get("breakTime");
            counter = counter + 1; 
            if (counter === breakTime * 60){
                vscode.window.showInformationMessage("Break Time");
                vscode.window.showInformationMessage(`You can visit ${link}, take a break and get some suggestions to spend this break well.`);
                counter = 0;
            }
            vscode.commands.registerCommand("breakReminder.changeTime", () => {
                vscode.window.showInputBox(options = {placeHolder: "New working time:", ignoreFocusOut: true})
                .then(value => {
                    if (+value !== 0 && isNaN(+value) !== true){
                        context.globalState.update("breakTime", Number(value));
                        counter = 0;
                    }
                });
            });
        }
    }, 1000);
}

function deactivate() {
}