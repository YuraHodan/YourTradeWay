RailsAdmin.config do |config|

  ### Popular gems integration

  # == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

  config.included_models = [ThirdMenu::Translation,SecondMenu::Translation,MainMenu::Translation,MainMenu,SecondMenu,ThirdMenu,User,Sociallink,Contact,Contact::Translation,Rule,Rule::Translation]

  config.model Sociallink do
    navigation_label "Посилання на соціальні мережі"
    label "Соціальні мережі"
    include_fields :vkontakte_url, :facebook_url, :twitter_url, :youtube_url, :linkedin_url, :google_url, :pinterest_url, :odnoklasniki_url
  end

  config.model Contact do
    navigation_label "Контакти"
    label "Контакти"
    field :translations, :globalize_tabs
    include_fields :email, :first_number, :second_number, :third_number, :fax
  end
    config.model Contact::Translation do
      visible false
      configure :locale, :hidden
      fields :locale, :title, :country, :address
    end

  config.model MainMenu do
    field :translations, :globalize_tabs
    field :category, :enum do
       enum ["Products", "Factories", "Distributors", "Markets", "Logistic"]
    end
    field :second_menus
  end

  config.model MainMenu::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title
  end

  config.model SecondMenu do
    field :third_menus
    field :translations, :globalize_tabs
  end

  config.model SecondMenu::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title
  end

  config.model ThirdMenu do
    field :translations, :globalize_tabs
  end

  config.model ThirdMenu::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title
  end

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
