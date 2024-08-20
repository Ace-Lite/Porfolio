const links = [
    ["subpages/home.html",          "Home"],
    ["subpages/updates.html",       "Updates"],    
    ["subpages/projects.html",      "Projects"],
    ["subpages/artwork.html",       "Artwork"],   
    ["subpages/contacts.html",      "Contacts"],                       
];

//  FONT SOURCE: https://fonts.google.com/specimen/Bebas+Neue?classification=Display
//  https://fonts.google.com/specimen/Sarabun?classification=Display


var html_switch = 0;
var boolean_scroll = false;

// Switching page function
function ChangeSwitch(number)
{
    if (html_switch != number)
    {
        document.querySelector('#insertContent').style.opacity = 0;
        document.querySelector('#headertext').style.opacity = 0;    
    }

    setTimeout(function () { 
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 500);

    setTimeout(function () {
        document.querySelector('#insertContent').style.opacity = 1
        document.querySelector('#headertext').style.opacity = 1        
        if (links[number])
        {
            $("#insertContent").load(links[html_switch][0]);
            $('#headertext').text(links[number][1]);

            document.title = "SkyDusk - "+links[number][1];
        }
    }, 500);

    if (GalleryPanel && GalleryPanel.close)
        GalleryPanel.close()

    html_switch = number;
};

document.addEventListener('scroll', function() {
    const height_bx = Math.max(150-window.scrollY, 0)
    const procentile = height_bx/150

    $('#banner2').css('opacity', procentile)
    .css('height', height_bx+"px")
    .css('margin-top', (18+window.scrollY)+"px");

    $('#infoPanel').css('top', ($(window).height()/5 + window.scrollY));
    $('#wrapperPanel').css('top', window.scrollY);

    $('#cornerImage2').css('height', height_bx+"px");
})


function Update()
{return 0};