var ans = "";
var buttons = document.querySelectorAll(".btn");
for(var i  = 0;i < buttons.length;i++)
{
    buttons[i].addEventListener("click",function (event) { 
        console.log(event.target);
        if(event.target.innerHTML === '=')
        {
            ans = eval(ans);
            document.querySelector('input').value = ans;
        }
        else if(event.target.innerHTML === 'AC')
        {
            ans = "";
            document.querySelector('input').value = ans;
        }
        else{
            ans += event.target.innerHTML;
            document.querySelector('input').value = ans;
        }
     });
}