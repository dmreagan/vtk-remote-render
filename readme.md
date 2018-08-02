# VTK Remote Render Test

A simple example of a ParaViewWeb remote renderer.

## Setup

### Render server

You will need a special version of Python which includes ParaViewWeb. This can be obtained by installing the [ParaView desktop application](https://www.paraview.org/download/) on your system. It will include a Python binary called `pvpython`. On Windows, it will be located somewhere like:

> C:\Program Files\ParaView 5.5.2-Qt5-MPI-Windows-64bit/bin/pvpython.exe

### Web client

You will need to install [Node.js](http://nodejs.org/) to build and serve the web client.

Navigate to _/client/_. Install the project dependencies by typing:

```bash
npm install
```

## Run

### Render server

Navigate to _/server/_. Run _vtk_server.py_ using `pvpython` by typing (on Windows):

```bash
"C:\Program Files\ParaView 5.5.2-Qt5-MPI-Windows-64bit/bin/pvpython.exe" vtk_server.py --port 1234
```

### Web client

Navigate to _/client/_. To serve the web client in development mode, type:

```bash
npm start
```

and open _localhost:9999_ in your web browser.

To build a production version of the web client, type:

```bash
npm run build
```