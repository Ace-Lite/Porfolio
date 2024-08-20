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

    switch(path_image, description)
    {
        if (path_image)
        {
            $('#infoPanel_Image').prop('src', path_image);
        }

        if (description)
        {
            $('#infoPanel_Description').text(description);
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

function openSwitch(path_image, description)
{
    GalleryPanel.switch(path_image, description);
    GalleryPanel.open();
}