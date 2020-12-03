class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        text("500",15,450);
        text("100",95,450);
        text("200",175,450);
        text("100",255,450);
        text("500",335,450);
        text("100",415,450);
        
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};