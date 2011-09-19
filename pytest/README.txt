--------------------------------------
README for Tundra2 python test scripts
--------------------------------------

- config.py
    - define launcher + auto-report settings & test-related directories here

- launcher.py 
    - runs all configured tests: (needs root password if avatar test is included because of tshark)
    - parameters:
        -p, --password <password> (default "hardcoded")
    - usage example: 
        python launcher.py -p passwd123

- js-viewer-server-test.py
    - tries to launch local server and connect to it with the viewer app
    - parameters:
        -f, --file <path/to/file> (default ~/realxtend/bin/scenes/Avatar/avatar.txml)
    - usage example: 
        python js-viewer-server-test.py -f ~/realxtend/bin/scenes/Avatar/avatar.txml

- avatar-test.py
    - tries to connect to the server multiple times and move the avatar around, while recording traffic with tshark
    - parameters:
        -r, --runs 	number of runs (default 2)
        -c, --clients 	number of clients per run (default 2)
        -j, --js <chiru/local> 	select server (default local)
    - usage example: 
        python avatar-test.py -r 1 -c 1 -j chiru

- launchtundra.py
    - launches tundra server/viewer with given scene/script etc. parameters 
    - parameters:
        -p, --parameters   run configuration parameters for tundra2
    - usage example:
        python launchtundra.py -p '--server --protocol udp --file scenes/scenex/x.txml'


