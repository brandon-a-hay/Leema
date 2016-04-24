# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += ['admin.css', 'all.css', 'animate.css', 'application.css', 'bootstrap.js', 'custom_order.js', 'delivery.js', 'editprofile.css', 'editprofile.js', 'global.js', 'my_orders.js', 'my_orders.css', 'owl.carousel.min.js', 'products.css', 'profiles.css', 'profiles.js', 'ratings.css', 'signin.css', 'welcome.css', 'welcome.js', 'spree/frontend/copy_ship_address.js']
