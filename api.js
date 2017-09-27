function addElement(text, style) {
    var div = document.createElement('div');
    div.id = getId();
    for (key in style) {
        div.style[key] = style[key];
    }
    console.log(div);
    document.body.appendChild(div);
    if (typeof text === "string") {
        document.getElementById(div.id).innerHTML=text;
    } else if (typeof text === "object") {
        document.getElementById(div.id).innerHTML=text.text;
    }
    return div;
}

var Text = function(text, options) {
    console.assert(typeof text === "string", {
        "message": "text must be string type.",
        "text": typeof text
    });

    var type_map = {
        'text': 0,
        'word': 1,
        'char': 2,
    };

    var textObj = {
        type: 'text',
        text: text,
        font: '',
        x: 0,
        y: 0,
    }

    if (options) {
        for (var o in options) {
            textObj[o] = options[o];
        }
    }

    return textObj;
}
