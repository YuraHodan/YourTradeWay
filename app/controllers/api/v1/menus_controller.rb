class Api::V1::MenusController < Api::V1::BaseController

  def index
    @menus =  {
      products:     map_menu(MainMenu.where(category: "Products")),
      markets:      map_menu(MainMenu.where(category: "Markets")),
      distributors: map_menu(MainMenu.where(category: "Distributors")),
      factories:    map_menu(MainMenu.where(category: "Factories")),
      logistic:     map_menu(MainMenu.where(category: "Logistic"))
    }

    respond_with @menus
  end

  private

  def map_menu(menu)
    menu.map{ |menu| {
        id:         menu.id,
        category:   menu.category,
        name:       menu.title,
        second_menu: map_second_menu(menu.second_menus)

        }
      }
  end

  def map_second_menu(menu)
    menu.map { |second_menu|
        {
          id:  second_menu.id,
          title: second_menu.title,
          third_menu: map_third_menu(second_menu.third_menus)}
        }
  end

  def map_third_menu(menu)
    menu.map { |menu|
                {
                  id:  menu.id,
                  title: menu.title
                }
              }
  end
end
