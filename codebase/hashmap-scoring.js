function HashData(obj)
{
    this.length = 0;
    this.text = {};
    
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.text[p] = obj[p];
            this.length++;
        }
    }

    this.setText = function(key, value)
    {
        var previous = undefined;
        if (this.hasText(key)) {
            previous = this.text[key];
        }
        else {
            this.length++;
        }
        this.text[key] = value;
        return previous;
    }

    this.getText = function(key) {
        return this.hasText(key) ? this.text[key] : undefined;
    }

    this.hasText = function(key)
    {
        return this.text.hasOwnProperty(key);
    }
   
    this.removeText = function(key)
    {
        if (this.hasText(key)) {
            previous = this.text[key];
            this.length--;
            delete this.text[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        var keys = [];
        for (var k in this.text) {
            if (this.hasText(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function()
    {
        var values = [];
        for (var k in this.text) {
            if (this.hasText(k)) {
                values.push(this.text[k]);
            }
        }
        return values;
    }

    this.each = function(fn) {
        for (var k in this.text) {
            if (this.hasText(k)) {
                fn(k, this.text[k]);
            }
        }
    }

    this.clear = function()
    {
        this.text = {}
        this.length = 0;
    }
}

//var currPic = 20;
    
//}
//NivoSlider.vars.currentImage.id; //@TODO: generate random number here for a random animal