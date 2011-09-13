#!/usr/local/bin/python

#import
import os
import os.path
import subprocess
from optparse import OptionParser
import config

# folder config
scriptDir = os.path.abspath(os.getcwd())
rexbinDir = config.rexbinDir
testDir = os.path.abspath(os.path.join(scriptDir, '..'))
logsDir = os.path.abspath(os.path.join(scriptDir, 'logs/launchtundra/'))

# output files
serverOutput = logsDir + "/s.out"
viewerOutput = logsDir + "/v.out"

param = ""

def main():
    makePreparations()
    os.chdir(rexbinDir)
    runTundra(param)
    os.chdir(scriptDir)

def makePreparations():
    if not os.path.exists(logsDir):
        os.makedirs(logsDir)

def runTundra(param):
    t = "./Tundra " + param + " 2>&1 | tee " + serverOutput
    subprocess.call(t, shell=True)
    

if __name__ == "__main__":
    parser = OptionParser()
    parser.add_option("-p", "--parameters", dest="param")
    (options, args) = parser.parse_args()
    if options.param:
        param = options.param
    main()
