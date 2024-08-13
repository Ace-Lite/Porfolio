const links = [
    ["subpages/test1.html", "test1"],
    ["subpages/test2.html", "test2"],                        
];

var html_switch = 0;
var boolean_scroll = false;

// Switching page function
function ChangeSwitch(number)
{
    if (html_switch != number)
        document.querySelector('#insertContent').style.opacity = 0

    setTimeout(function () { 
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 500);

    setTimeout(function () {
        document.querySelector('#insertContent').style.opacity = 1
        if (links[number])
        {
            $("#insertContent").load(links[html_switch][0]);
            $('#sidetitle').textContent = links[number][1];

            document.title = "SkyDusk - "+links[number][1];
        }
    }, 500);

    html_switch = number;
};



document.addEventListener('scroll', function() {
    const height_bx = Math.max(150-window.scrollY, 0)
    const procentile = height_bx/150

    $('#banner2').css('opacity', procentile);
    $('#banner2').css('height', height_bx+"px");
    $('#banner2').css('margin-top', (18+window.scrollY)+"px");

    $('#cornerImage2').css('height', height_bx+"px");
})


function Update()
{return 0};