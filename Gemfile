source 'https://rubygems.org'
gem 'devise', '3.2.3'
gem 'rails', '4.1.6'
#Deleted these gems for production push
# # Use puma as the production webserver
# gem 'puma', group: :production
# # Heroku kills processes that take longer than 30 seconds, this gem tells puma to kill them too
# gem "rack-timeout"
# Use sqlite3 as the database for Active Record
gem 'sqlite3', group: :development
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Facebook authentication
gem 'omniauth-facebook'
# Used as currency fields
gem 'money-rails'
gem 'cancancan', '~> 1.9'

group :development do
  gem 'xray-rails'
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

gem "therubyracer"
gem "less-rails" #Sprockets (what Rails 3.1 uses for its asset pipeline) supports LESS
gem "twitter-bootstrap-rails"
gem 'spree', '2.3.4'
gem 'spree_gateway', :git => 'https://github.com/spree/spree_gateway.git', :branch => '2-3-stable'
gem 'spree_reviews', github: 'spree-contrib/spree_reviews', branch: '2-3-stable'
gem 'aws-sdk' #For using S3 to store images
gem "asset_sync" #sync assets to s3

#multi-tenancy
gem 'spree_drop_ship', github: 'jdutil/spree_drop_ship'
gem 'spree_marketplace', github: 'jdutil/spree_marketplace'
gem 'spree_mail_settings', github: 'spree-contrib/spree_mail_settings', branch: '2-3-stable'
gem 'easypost'

#For Heroku deployment
gem 'rails_12factor', group: :production
gem 'pg', group: :production
ruby "2.1.2"



