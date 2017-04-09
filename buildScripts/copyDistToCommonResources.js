import ncp from 'ncp';
import rimraf from 'rimraf';
import fs from 'fs';

let distFolder = "C:/Users/michael.mundy/Documents/VS Code/ReactDev/reactdev/dist";
let commonResourcesTypeScriptPortletsFolder = "C:/Users/michael.mundy/Source/Workspaces/v4/Common/resources/shared/controls/ReactPortlets";

// Note: filter option in NCP (used to copy files) does not work (https://github.com/AvianFlu/ncp/issues/101)

//Delete the common resources TypeScriptPortlets directory.
rimraf(commonResourcesTypeScriptPortletsFolder, function(err) {
    console.log(err);
    //Re-create the common resources TypeScriptPortlets directory.
    fs.mkdir(commonResourcesTypeScriptPortletsFolder, function(err) {
        console.log(err);
        //Copy files to common resources from dist.
        ncp.limit = 0;
        ncp(distFolder, commonResourcesTypeScriptPortletsFolder, function(err) {
            if (err) {
                return console.error(err);
            }
            console.log('All files copied from dist folder to common resources folder.');
        });
    });
});



