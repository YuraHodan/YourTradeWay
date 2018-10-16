class CreateRegistrationForm < ActiveRecord::Migration
  def change
    create_table :registration_forms do |t|
      t.string :type_of_activity
      t.string :type_of_tariff
      t.string :company_name
      t.string :type_of_products
      t.string :logo_image
      t.text   :description
      t.string :video_url
      t.string :catalog_file
      t.string :price_list_file
      t.string :certificate_file
      t.string :country
      t.string :city
      t.string :street
      t.string :phone_number
      t.string :web_site_url
      t.string :person_full_name
      t.string :person_email
      t.string :person_phone_number
      t.string :person_fax_number
    end
  end
end
