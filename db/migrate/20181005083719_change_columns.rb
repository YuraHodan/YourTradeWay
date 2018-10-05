class ChangeColumns < ActiveRecord::Migration
  def change
    rename_column :premium_manufactures, :type, :type_of_plan
    rename_column :premium_distributors, :type, :type_of_plan
    rename_column :premium_markets, :type, :type_of_plan
    rename_column :premium_logistics, :type, :type_of_plan
  end
end
