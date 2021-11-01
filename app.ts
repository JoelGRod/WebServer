import path from "path";
import express from "express";
import { Request, Response } from "express";

// Global
const port: number = 8080;
// Server init
const app = express();

// Middleware
app.use( express.static("public") );

app.get("/generic", ( req: Request, res: Response ) => {
    res.sendFile(path.join(__dirname, "../public/generic.html"));
});

app.get("/elements", ( req: Request, res: Response ) => {
    res.sendFile(path.join(__dirname, "../public/elements.html"));
});

app.get("*", ( req: Request, res: Response ) => {
    res.send("<h1>404 - Page Not Found</h1>");
});

app.listen( port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})