(function(){
    var shape={
            type: 'shape',
            getType: function()
            {
             return this.type;
            }
    };
    
    function Triangle(a, b, c)
    {
         this.type = "triangle";
         this.a = a;
         this.b = b;
         this.c = c;
    }

    Triangle.prototype = Object.create(shape);
    Triangle.prototype.constructor = Triangle;
    Triangle.prototype.getPerimeter = function()
        {
            console.log(this.a+this.b+this.c);
        };
    
        var newTri = new Triangle(1, 2, 3);

    console.log(newTri.constructor === Triangle);
    console.log(shape.isPrototypeOf(newTri));
    newTri.getPerimeter();
    console.log(newTri.getType());
    newTri.a;
    console.log(newTri);
  })();
  