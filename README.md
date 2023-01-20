Sample Node.js app

Usage on localhost:

$ git clone https://github.com/alpaslank-73/node-hello.git
$ cd node-hello
$ node app.sh

From another terminal:

$ curl localhost:8080

How to deploy on Openshift:

$ oc new-project node-hello
$ oc new-app --name nodehello https://github.com/alpaslank-73/node-hello.git
$ oc expose svc nodehello
$ oc get route
$ curl $(oc get route |tail -1 | cut -d' ' -f4)
