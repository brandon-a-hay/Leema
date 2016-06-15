class AddYelpToSuppliers < ActiveRecord::Migration
  def change
    add_column :spree_suppliers, :yelp_id, :string
  end
end
