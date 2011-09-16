#!/usr/local/bin/python
import getpass
import os
import os.path


#
# LAUNCHER
#
launcherFTPHOST="xxx"
launcherFTPUSER="xxx"
launcherFTPPASSWD="xxx"

launcherArchiveResults = True
launcherUploadFile = False




#AUTOREPORT
# FTP-CONFIG for fileUpload
autoreportFTPHOST="xxx"
autoreportFTPUSER="xxx"
autoreportFTPPASSWD="xxx"

# Option for preserving test output files after archive has been created
preserveLogs = False
# Option for moving test output files to an old archives folder (debug-standalone-run)
# if preserveLogs is set to false option is ignored
moveOld = False
# Option for cleaning up (removing temp files) the the folder after running the script
# default true
cleanUp = True
# Option for uploading report .zip to host
# default false (needs config)
uploadFile = False
# Option for making github issue report
# default false (needs config)
createGithubIssue = False
#Option for including test machine info to the report file
includeMachineInfo = True




### FOLDER CONFIG ###
#
#COMMON
#
rexbinDir = "/home/" + getpass.getuser() + "/src/realxtend/naali/bin/"
scriptDir = os.path.abspath(os.getcwd())
testDir = os.path.abspath(os.path.join(scriptDir, '..'))

#
#JVST-TEST
#
jvstLogsDir = os.path.abspath(os.path.join(scriptDir, 'logs/jvst-output/'))

#
#AVATAR-TEST
#
avatarLogsDir = os.path.abspath(os.path.join(scriptDir, 'logs/avatar-output'))
wiresTempDir = os.path.abspath(os.path.join(scriptDir, 'wireshark_temp'))
tsharkLocation = "c:/Program Files/Wireshark/"

#LAUNCHTUNDRA-TEST
tundraLogsDir = os.path.abspath(os.path.join(scriptDir, 'logs/launchtundra/'))
