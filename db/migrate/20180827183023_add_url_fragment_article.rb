class AddUrlFragmentArticle < ActiveRecord::Migration
  def change
    add_column :articles, :url_fragment, :string
  end
end
