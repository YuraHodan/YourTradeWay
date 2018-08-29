class CreateSociallink < ActiveRecord::Migration
  def change
    create_table :sociallinks do |t|
      t.string :vkontakte_url
      t.string :facebook_url
      t.string :twitter_url
      t.string :youtube_url
      t.string :linkedin_url
      t.string :google_url
      t.string :pinterest_url
      t.string :odnoklasniki_url
    end
  end
end
