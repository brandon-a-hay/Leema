class AddCustomOrderDescriptionToProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :custom_order_description, :text
  end
end
