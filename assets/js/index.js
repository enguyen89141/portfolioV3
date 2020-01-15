function handleThumbnailClicks() {
    $('.hhthumbnail').on('click', function(event) {
       const imgSrc = $(this).find('img').attr('src');  
       const imgAlt = $(this).find('img').attr('alt');
      $('.happyHourImages').attr('src', imgSrc).attr('alt', imgAlt);
    });
    $('.nthumbnail').on('click', function(event) {
      const imgSrc = $(this).find('img').attr('src');  
      const imgAlt = $(this).find('img').attr('alt');
     $('.notefulImages').attr('src', imgSrc).attr('alt', imgAlt);
   });
   $('.aathumbnail').on('click', function(event) {
    const imgSrc = $(this).find('img').attr('src');  
    const imgAlt = $(this).find('img').attr('alt');
   $('.allowanceImages').attr('src', imgSrc).attr('alt', imgAlt);
 });
  }

  handleThumbnailClicks();