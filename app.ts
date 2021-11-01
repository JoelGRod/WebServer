import express from "express";
import path from "path";
import hbs from "hbs";

import { Request, Response } from "express";

// Global
const port: number = 8080;

// Server Instance
const app = express();

// View Engine - Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( path.join(__dirname, '../views/partials') );

// Main routes
app.get("/", ( req: Request, res: Response ) => {
    res.render("home", {
        title: "WebServer",
        author: "Joel G Rod"
    });
});

app.get("/generic", ( req: Request, res: Response ) => {
    res.render("generic", {
        title: "WebServer",
        author: "Joel G Rod"
    });
});

app.get("/elements", ( req: Request, res: Response ) => {
    res.render("elements", {
        title: "WebServer",
        author: "Joel G Rod"
    });
});

// Public
app.use( express.static("public") );

// Extra routes
app.get("*", ( req: Request, res: Response ) => {
    res.send("<h1>404 - Page Not Found</h1>");
});

// Server
app.listen( port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})