class ClientsController < ApplicationController
  def inde
    @client = Clients.all
  end
  def show
    @client = Clients.find(params[ :id,  :name])
  end
end
