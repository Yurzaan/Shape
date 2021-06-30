canvas=document.getElementById("cvs");
         pencil=canvas.getContext("2d");
            pencil.beginPath();
            pencil.strokeStyle = "blue";
            pencil.lineWidth = 5;
            pencil.arc(400, 300, 40, 0, 360);
            pencil.stroke();
            canvas.addEventListener("mousedown", mouse_function);
            function mouse_function(e) {
                colour = document.getElementById("color").value;
                shape=document.getElementById("shape").value;
                mouse_x = e.clientX - canvas.offsetLeft;
                mouse_y = e.clientY - canvas.offsetTop;

            
                if(shape=="Rectangle"){Rectangle(mouse_x, mouse_y);}
                if(shape=="Circle"){circle(mouse_x, mouse_y);}
                if(shape=="Square"){square(mouse_x, mouse_y);}
            }

            function circle(mouse_x, mouse_y) {
                pencil.beginPath();
                pencil.strokeStyle = colour;
                pencil.lineWidth = 5;
                pencil.arc(mouse_x, mouse_y, 40, 0, 360);
                pencil.stroke();
            }
           

            function Rectangle(mouse_x, mouse_y) {
                pencil.beginPath();
                pencil.strokeStyle = colour;
                pencil.lineWidth = 5;
                pencil.rect(mouse_x, mouse_y, 300, 50 );
                pencil.stroke();
            }
            function square(mouse_x, mouse_y) {
                pencil.beginPath();
                pencil.strokeStyle = colour;
                pencil.lineWidth = 5;
                pencil.rect(mouse_x, mouse_y, 50, 50 );
                pencil.stroke();
            }
            function clear_canvas() {
                pencil.clearRect(0, 0, canvas.width, canvas.height);
            }