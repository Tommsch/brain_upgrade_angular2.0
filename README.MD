# About this project

This is a example of a very simple TodoList app build using Angular 2.0 for a Luminis Arnhem session about Angular 2.0.

# How to run

In order to run the application, it should be transpiled using Traceur with the following command from the project root.

	"tsc --watch -m commonjs -t es5 --emitDecoratorMetadata www/script/todoListApp.ts"

Then just launch a simple http server from the project root and go to:

	"http://localhost:8080/www"