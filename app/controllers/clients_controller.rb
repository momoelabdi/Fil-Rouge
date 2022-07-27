class ClientsController < ApplicationController

  def new
    @clients = Client.all
    render json: @clients
  end

  def create
    @clients = Client.new(client_params)
    if @clients.save
      render json: @clients
    end
  end


  def client_params
    params.permit([:nom, :mail])
  end

end
