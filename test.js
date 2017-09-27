window.onload = function() {
    var text1 = new mojs.Html({
        //el: '#hello',
        el: addElement("Hello", {color: "red"}),
        x: { 0: 200, duration: 1000, delay: 200, easing: 'cubic.out', onComplete () { console.log('x property animation complete') } },
        y: { 200: 200, duration: 2000, onComplete () { console.log('y property animation complete') } },
    });

    var text2 = new mojs.Html({
        //el: '#mojs',
        el: addElement("Mo.js", {color: "magenta"}),
        x: { 200: 200, duration: 1000, delay: 200, easing: 'cubic.out', onComplete () { console.log('x property animation complete') } },
        y: { 0: 200, duration: 2000, onComplete () { console.log('y property animation complete') } },
        angleX: { 0: 360, duration: 2000 },
    });

    var text3 = new mojs.Html({
        //el: '#world',
        el: addElement("World", {color: "gray"}),
        x: { 400: 200, duration: 1000, delay: 200, easing: 'cubic.out', onComplete () { console.log('x property animation complete') } },
        y: { 200: 200, duration: 2000, onComplete () { console.log('y property animation complete') } },
        opacity: { 0: 1, duration: 2000}
    });


    const timeline = new mojs.Timeline;
    timeline.
        add(text1, text2, text3).replay();

    //const player = new MojsPlayer({add: timeline});

    addElement("Add Element", {color: "lightblue"});
    addElement("Add Element", {color: "magenta"});

    var text = Text("I want to fly");
    addElement(text, {color: "hotpink"});

};

var id = 0;
function getId() {
    return id++;
}

var first = new mojs.Shape({
shape: 'circle',
radius: {
0: 40
},
stroke: 'cyan',
strokeWidth: {
20: 0
},
fill: 'none',
left: 0,
top: 0,
duration:300
});

var seconds = [];
var colors = ['deeppink', 'magenta', 'blue', 'tomato'];
for (var i = 0; i < 4; i++) {
    var second = new mojs.Shape({
        parent: first.el,
        shape: 'circle',
        radius: {
            0: 'rand(10,30)'
        },
        stroke: colors[i],
        strokeWidth: {
            10: 0
        },
        fill: 'none',
        left: '50%',
        top: '50%',
        x:'rand(-50, 50)',
        y:'rand(-50, 50)',
        delay:250
    });
    seconds.push(second);
}

document.addEventListener('click', function (e) {
    first.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();

    for(var i=0; i<seconds.length; i++){
        seconds[i].generate().replay();
    }
});

