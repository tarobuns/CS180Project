Keekers Social Media Platform

Front-End Instructions:
 -----------------------------------------------------------------------------

    Search up node js website and install node.js
    Make sure its in the environmental variables by checking the path and ensuring "nodejs" is in there.
     It should already be in there
    Double check you have this installed by opening the command prompt and typing "node -v" into terminal.
     It should output something like "20.11.1"

    Open vscode and install the following extensions for help with functions and stuff
      ES7+ React Extensions
      Simple React Snippets
      Prettier Ext. (if you want)

    In vscode, create a folder where youll store this project
    run "npm create-react-app [project name]". This will take some time to install all necessary packages.

    Your [project name] can be anything, I named mine 'keekerss'

    update react if necessary (should tell you if theres an update pending, probably minor)

    Once done, your folder will now contain the needed files to run a basic demo.
     Check that it's running properly with "cd [project name]" and start it with "npm start".
      It should be opened with your browser (Chrome perferrably).
       There should be a spinning react logo. 

    I used yarn. Here's how to install yarn, search "classic yarnpkg".
     Check out the get started and proceed to installation.
      Check that you have node and npm installed with "node -v" and "npm -v" respectively.
       Install the installer, go through wizard and finish.
        You'll need to restart VSCode for this next bit, check if yarn is installed with "yarn -v".
         Thats it.

    Use "yarn add sass" to be able to use scss files alongside the jsx files.

    -----------------------------------------------------------------------------

    Start creating the folders to organize the jsx and scss files needed for Keekers.
     The necessary hierarchy and files are already in this repository so just copy the code.
      You might get some warnings for some of the scss functions being empty but thats okay, you don't really need them. 

    Now that that's done install react-router-dom. So use "yarn add react-router-dom".
     This should take a while.

    Now we need to install the material icons since we use those for aesthetics.
     SUPER IMPORTANT. Install in the [project name] directory unless you want runtime errors.
      Run "npm install @mui/icons-material @mui/material @emotion/styled @emotion/react" in the aforementined directory.
       Again, this is gonna take a bit.

    Now run the project with "npm start".
     The project should load the home page, because currently currUser is set to true for testing front-end purposes.
      It should be false by default and only set to true when the user properly logs in.