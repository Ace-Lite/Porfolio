class InfoPanel {

    close()
    {
        $('#infoPanel').css('opacity', '0%'); 
        window.setTimeout(function()
        {
            $('#infoPanel').css('display', 'none');  
        }, 500);
        $('#blurrable').css('filter', 'blur(0px)');
        $('#wrapperPanel').css('opacity', '0%').css('pointer-events', 'none');
    }

    switch(description, xheadertext)
    {
        if (xheadertext)
        {
            $('#infoPanel_Header').text(xheadertext);
        }
        else
        {
            $('#infoPanel_Header').text("---");
        }

        if (description)
        {
            $('#infoPanel_Description').text(description);
        }
        else
        {
            $('#infoPanel_Description').text("---");
        }        
    }

    open()
    {
        $('#infoPanel').css('display', 'block');
        window.setTimeout(function()
        {
            $('#infoPanel').css('opacity', '100%');            
            $('#wrapperPanel').css('opacity', '100%').css('pointer-events', 'auto');
        }, 200);
    }
}

const GalleryPanel = new InfoPanel;

function openSwitch(description, xheadertext)
{
    GalleryPanel.switch(description, xheadertext);
    GalleryPanel.open();
}