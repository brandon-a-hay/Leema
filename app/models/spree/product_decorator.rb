Spree::Product.class_eval do
  belongs_to :user, class_name: Spree.user_class.to_s

  validates :leema_description, presence: true
  validates :ingredients, presence: true
  validates :shipping_information, presence: true
  validates :package_count, presence: true, length: { minimum: 1 }

  after_update :increase_variant_price

  def self.search(search)
    if search
      # if user clicks on a drop down suggestion take them direct to the page
      @product_match = self.where(name: search).first
      return @product_match if @product_match

      @supplier_match = Spree::Supplier.where(store_name: search).first
      return @supplier_match if @supplier_match

      @supplier_search = self.joins(:suppliers).where('hidden = false AND store_name LIKE ?', "%#{search}%")
      @product_search = self.where(['hidden = false AND name LIKE ? OR leema_description LIKE ?', "%#{search}%", "%#{search}%"])
      if @supplier_search.count > 0
        @supplier_search
      elsif @product_search.count > 0
        @product_search
      end
    else
      @products = self.where(hidden: false)
    end
  end

  def increase_variant_price
    # if user updates the price increase field, propogate that value to the variant price
    if self.price_increase_changed?
      # the product's last (most recent) variant is the custom order variant. will need to change this
      # if we ever allow more than 1 custom variant.
      variant = self.variants.last
      if variant
        # if supplier doesnt enter anything or if they entered 0, then do nothing with the variant price
        if self.price_increase && self.price_increase > 0
          variant.price = self.price_increase + self.price
          variant.save!
        end
      else
        # handle this so the app doesnt bomb out
        puts 'no variant found... woops!'
      end
    end
  end

end