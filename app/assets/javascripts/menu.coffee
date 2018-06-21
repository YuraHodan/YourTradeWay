# $document.on 'click', '.menu-button', ->

#   $(this).toggleClass("opened")
#   $('.menu-wrapper').toggleClass('opened')
#   $('.mask').toggleClass('visible')

# $.clickOut(".menu-wrapper",
#   ()->
#     $('.menu-button').removeClass('opened')
#     $('.mask').removeClass('visible')
#     $('.menu-wrapper').removeClass('opened')
#   {except: ".menu-wrapper, .menu-button"}
# )

$document.on 'click', '.list-arrow', ->
  # var this = $(this).parent()

  # $('.one-tovar').siblings().removeClass('opened')
  $(this).parent().toggleClass('opened')
  # if ($('.one-tovar').hasClass('opened')){
  #   $(this).removeClass('opened')
  # }
