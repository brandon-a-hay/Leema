class AddPackageCountToProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :package_count, :integer
  end
end
