var counter=1;
setInterval(function()
{
    document.getElementById('radio' + counter).checked=true;//making the current showing image radio button true
    counter++;
    if(counter>5)
    {
        counter =1;
    }
},5000); //each image will be shown for a 5 sec of time interval