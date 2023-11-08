console.log("first commit")
/*para iniciar una terminal en un directorio especifico se utiliza el comando 
cd /path/to/your/desired/directory.
After changing the directory in the terminal, you can save the workspace configuration. 
To do this, click on the "File" menu, then select "Save Workspace As..." 
and save the workspace configuration. This will create a .code-workspace file in your project folder.
Open User or Workspace Settings:
Click on the gear icon in the lower-left corner of the activity bar to open the settings menu.
From there, click on "Settings" to open the settings panel.

Edit Settings JSON:
At the top-right corner of the settings panel, you should see an "Open Settings (JSON)" icon. It looks 
like a pencil and a piece of paper. Click on this icon to open your settings.json file in edit mode.

Add Custom Terminal Directory:
Add the following line to set the terminal's current working directory to your desired location:
"terminal.integrated.cwd": "/path/to/your/desired/directory"
Replace "/path/to/your/desired/directory" with the actual path to the directory where you want 
the terminal to start. Save the changes you made to the .code-workspace file.
Close the editor and reopen your project in Visual Studio Code.
Now, every time you open this specific project, the integrated terminal should start in the 
specified directory.*/

function sayHello () {
    console.log("Hola!")
}