RailsAdmin.config do |config|

  ### Popular gems integration

  # == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

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
    dashboard do
      statistics false
    end                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app
  config.included_models = [MainPage,MainPage::Translation,MainSlider,Logistic,Logistic::Translation,Market,Market::Translation,Distributor,Distributor::Translation,Manufacture::Translation,Product::Translation,Product,Manufacture,Contact,Contact::Translation,Rule,Rule::Translation,Faq,Faq::Translation,Article,Article::Translation,ThirdMenu::Translation,SecondMenu::Translation,MainMenu::Translation,MainMenu,SecondMenu,ThirdMenu,User,Sociallink,Contact,Contact::Translation,Rule,Rule::Translation]

  config.model MainSlider do
   include_fields :image, :show
   field :product
  end
 config.model MainPage do
  fields :about_image
  field :translations, :globalize_tabs
  end

  config.model MainPage::Translation do
    visible false
    configure :locale, :hidden
    fields :locale
    field :about_description, :ck_editor
    field :tradergram_description, :ck_editor
    field :request_description, :ck_editor

  end
  config.model Sertificate do
      visible false

    fields :image
  end
  config.model Image do
      visible false

    fields :image
  end
config.model Logistic do
    navigation_label "Logistic"
    label "Logistic"
    field :translations, :globalize_tabs
    include_fields :country, :web_site_url, :first_email, :second_email, :third_email,
    :first_phone_number, :second_phone_number, :third_phone_number, :logo_image,
    :price_list_file, :sertificates_file, :premium, :recomend
    field :main_menu
    field :youtube_url
    field :images
    field :sertificates
  end

  config.model Logistic::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title, :address, :full_name
    field :description, :ck_editor
    field :our_benefits, :ck_editor
  end

  config.model Market do
    navigation_label "Market"
    label "Market"
    field :translations, :globalize_tabs
    include_fields :country, :web_site_url, :first_email, :second_email, :third_email,
    :first_phone_number, :second_phone_number, :third_phone_number, :logo_image,
    :price_list_file, :sertificates_file, :premium, :recomend
    field :main_menu
    field :youtube_url
    field :images
    field :sertificates
  end

  config.model Market::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title, :address, :full_name
    field :description, :ck_editor
    field :our_benefits, :ck_editor
    field :our_brands, :ck_editor
  end

  config.model Country do
    field :translations, :globalize_tabs
  end

  config.model Country::Translation do
      visible false
      configure :locale, :hidden
      fields :locale, :title
  end

  config.model Distributor do
    navigation_label "Distributor"
    label "Distributor"
    field :translations, :globalize_tabs
    include_fields :country, :web_site_url, :first_email, :second_email, :third_email,
    :first_phone_number, :second_phone_number, :third_phone_number, :logo_image,
    :price_list_file, :sertificates_file, :premium, :recomend
    field :second_menu
    field :youtube_url
    field :images
    field :sertificates
  end

  config.model Distributor::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title, :address, :full_name
    field :description, :ck_editor
    field :our_benefits, :ck_editor
  end

  config.model Manufacture do
    navigation_label "Manufactures"
    label "Manufactures"
    field :translations, :globalize_tabs
    include_fields :country, :web_site_url, :first_email, :second_email, :third_email,
    :first_phone_number, :second_phone_number, :third_phone_number, :logo_image, :catalog_file,
    :price_list_file, :sertificates_file, :premium, :recomend
    field :second_menu
    field :youtube_url
    field :images
    field :sertificates
  end

  config.model Manufacture::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title, :address, :full_name
    field :description, :ck_editor
  end

  config.model Product do
    navigation_label "Products"
    label "One product"
    field :translations, :globalize_tabs
    fields :manufacture, :country, :price, :volume, :amount, :weight, :youtube_url, :premium, :recomend, :third_menu, :logo_image
    field :images
    field :sertificates
  end

  config.model Product::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title,  :type_of_pack, :expiration_date
    field :description, :ck_editor
  end

  config.model Contact do
    navigation_label "Contacts"
    label "Contacts"
    field :translations, :globalize_tabs
    include_fields :email, :first_number, :second_number, :third_number, :fax
  end
    config.model Contact::Translation do
      visible false
      configure :locale, :hidden
      fields :locale, :title, :country, :address
    end

  config.model Rule do
    navigation_label "Rule"
    label "Rules"
    field :translations, :globalize_tabs
  end
    config.model Rule::Translation do
      visible false
      configure :locale, :hidden
      fields :locale, :title
      field :description, :ck_editor
    end

  config.model Faq do
    navigation_label "Faq"
    label "Faq"
    field :translations, :globalize_tabs
      field :category, :enum do
     enum ["Payment&Shipping","FAQ","Guarantee"]
   end
  end
    config.model Faq::Translation do
      visible false
      configure :locale, :hidden
      fields :locale, :title
      field :description, :ck_editor
    end

  config.model Sociallink do
    navigation_label "Посилання на соціальні мережі"
    label "Соціальні мережі"
    include_fields :vkontakte_url, :facebook_url, :twitter_url, :youtube_url, :linkedin_url, :google_url, :pinterest_url, :odnoklasniki_url
  end

  config.model Article do
    navigation_label "Tradegram"
    label "Article"
    field :translations, :globalize_tabs
    configure :date do
      strftime_format do
        "%d.%m.%Y"
      end
    end
    include_fields :first_image, :second_image, :third_image, :date, :show
  end
    config.model Article::Translation do
      visible false
      configure :locale, :hidden
      fields :locale, :title
      field :first_description, :ck_editor
      field :second_description, :ck_editor
      field :third_description, :ck_editor
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
    fields :main_menu
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
    fields :second_menu
  end

  config.model ThirdMenu::Translation do
    visible false
    configure :locale, :hidden
    fields :locale, :title
  end

    ## With an audit adapter, you can a`dd:
    # history_index
    # history_show
  end
end
