#!/usr/local/bin/python

#import
import os
import os.path
import subprocess
from optparse import OptionParser
import config
import autoreport

# folder config
scriptDir = os.path.abspath(os.getcwd())
rexbinDir = config.rexbinDir
testDir = os.path.abspath(os.path.join(scriptDir, '..'))
logsDir = os.path.abspath(os.path.join(scriptDir, 'logs/launchtundra/'))

# output files
serverOutput = logsDir + "/s.out"
viewerOutput = logsDir + "/v.out"
# output result!!!

testName = "launchtundra"

param = ""

def main():
    makePreparations()
    os.chdir(rexbinDir)
    runTundra(param)
    os.chdir(scriptDir)
    autoreport.autoreport(testName)

def makePreparations():
    if not os.path.exists(logsDir):
        os.makedirs(logsDir)

def runTundra(param):
    if ("--server" in param):
        t = "./Tundra " + param + " 2>&1 | tee " + serverOutput
    else:
        t = "./Tundra " + param + " 2>&1 | tee " + viewerOutput
    subprocess.call(t, shell=True)
    

if __name__ == "__main__":
    parser = OptionParser()
    parser.add_option("-p", "--parameters", dest="param")
    (options, args) = parser.parse_args()
    if options.param:
        param = options.param
    main()
