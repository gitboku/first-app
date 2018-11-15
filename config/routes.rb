Rails.application.routes.draw do
  get '/search', to: 'books#search'
  get '/help',  to: 'static_pages#help'
  get '/about', to: 'static_pages#about' # about_path
  get '/home',  to: 'static_pages#home'
  root 'books#search'
  
  resources :books
  
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
