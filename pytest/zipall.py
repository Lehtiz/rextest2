#!/usr/local/bin/python

import time
import zipfile
import glob
import os

def zipall():

    global timeStamp
    global zipName

    timeStamp = time.strftime("%Y-%m-%dT%H:%M:%S%Z", time.localtime())
    zipName = "testrun_" + timeStamp + ".zip"
    archives = glob.glob("*.zip")
    for i in range(0, len(archives)):
        z = zipfile.ZipFile(zipName, 'a',zipfile.ZIP_DEFLATED)
        z.write(archives[i])
        z.close()

    for i in range(0, len(archives)):
        os.remove(archives[i])

zipall()
