class ClientsController < ApplicationController

  def new
    @clients = Client.all
    render json: @clients
  end

  def create
    @clients = Client.new
  end

end
