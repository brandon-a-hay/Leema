class AddAttachmentShippingImageToSuppliers < ActiveRecord::Migration
  def self.up
    change_table :spree_suppliers do |t|
      t.attachment :shipping_image
    end
  end

  def self.down
    remove_attachment :spree_suppliers, :shipping_image
  end
end
