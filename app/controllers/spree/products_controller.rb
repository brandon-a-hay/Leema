module Spree
  class ProductsController < Spree::StoreController
    before_filter :load_product, :only => :show
    before_filter :load_taxon, :only => :index

    rescue_from ActiveRecord::RecordNotFound, :with => :render_404
    helper 'spree/taxons'

    respond_to :html

    def index
      @searcher = build_searcher(params.merge(include_images: true))
      @products = @searcher.retrieve_products
      @taxonomies = Spree::Taxonomy.includes(root: :children)
    end

    def show
      @variants = @product.variants_including_master.active(current_currency).includes([:option_values, :images])
      @product_properties = @product.product_properties.includes(:property)
      @taxon = Spree::Taxon.find(params[:taxon_id]) if params[:taxon_id]
      @supplier = @product.suppliers.first
      # yelp integration
      if !@supplier.yelp_id.nil? && !@supplier.yelp_id.blank?
        @yelp = Yelp.client.business(@supplier.yelp_id).business
      end
    end

    private

      def accurate_title
        @product ? @product.name : super
      end

      def load_product
        @products = Spree::Product.all
        @product = @products.friendly.find(params[:id])
      end

      def load_taxon
        @taxon = Spree::Taxon.find(params[:taxon]) if params[:taxon].present?
      end
  end
end
